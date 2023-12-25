const Record = require('../models/record');
const { extract } = require('../services/extract');
const fs = require('fs');
const { getData } = require('../services/ocr_api');
const path = require("path");


// POST /record/add
// Take the image convert to text than extraction and after saved to database
async function handleAddRecord(req, res) {

    try{

        // Google API Call
        const text = await getData(`./public/uploads/${req.file.filename}`, path.resolve('./cred/secret.json'));

        // Process and extract relevant information
        const extracted = extract(text);

        // Added path of saved image
        extracted.inputImageURL = `/uploads/${req.file.filename}`;

        // Save to database
        const record = await Record.create(extracted);

        // Redirect to record page
        return res.redirect(`/record/${record._id}`);

    }catch (error) {

        // Any error redirect to 404
        console.log('error while add record', error);
        return res.render('404');

    }
}

// POST /record/edit/:recordId
// Update the database with Updated Info
async function handleEditRecord(req, res) {
    try {

        // Get the updated info as POST
        const {identification_number, name, last_name, date_of_birth, date_of_issue, date_of_expiry} = req.body;

        // Update in DataBase
        const record = await Record.findByIdAndUpdate(req.params.recordId,{
                identification_number,
                name,
                last_name,
                date_of_birth,
                date_of_issue,
                date_of_expiry
            });

        // Redirect to Record page
        return res.redirect(`/record/${req.params.recordId}`);

    }catch (error) {

        // Any error redirect to 404
        console.log('error while edit record', error);
        return res.render('404');
    }
}

// GET /record/delete/:recordId
// delete the record
async function handleDeleteRecord(req, res) {
    try{

        // Find the record and delete in database
        const record =await Record.findByIdAndDelete(req.params.recordId);

        // Delete the image from local storage
        fs.unlink(`./public/${record.inputImageURL}`, () => {});

        // Redirect to Home Page
        return res.redirect(`/`);

    }catch (error) {

        // Any error redirect to 404
        console.log('error while delete record', error);
        return res.render('404');

    }
}

// Exports
module.exports = {
    handleAddRecord,
    handleEditRecord,
    handleDeleteRecord,
};