const Record = require('../models/record');
const { extract } = require('../services/extract');
const fs = require('fs');
const { getData } = require('../services/ocr_api');


// POST /record/add
// Take the image convert to text than extraction and after saved to database
async function handleAddRecord(req, res) {
    //todo convImgToTxt
    // const text = convImgToTxt(`/uploads/${req.file.filename}`);
    const text = await getData(`./public/uploads/${req.file.filename}`, './secret.json');
    const extracted = extract(text);
    // console.log(extracted);
    // return res.json({ok : 'ok'});
    const record = await Record.create({
        status: extracted.status,
        inputImageURL:  `/uploads/${req.file.filename}`,
        identification_number: extracted.identification_number,
        name: extracted.name,
        last_name: extracted.last_name,
        date_of_birth: extracted.date_of_birth,
        date_of_issue: extracted.date_of_issue,
        date_of_expiry: extracted.date_of_expiry
    });
    return res.redirect(`/record/${record._id}`);
}

// POST /record/edit/:recordId
// Update the database with Updated Info
async function handleEditRecord(req, res) {
    try {
        const {identification_number, name, last_name, date_of_birth, date_of_issue, date_of_expiry} = req.body;
        const record = await Record.findByIdAndUpdate(req.params.recordId,{
                identification_number,
                name,
                last_name,
                date_of_birth,
                date_of_issue,
                date_of_expiry
            });
        return res.redirect(`/record/${req.params.recordId}`);
    }catch (error) {
        return res.render('404');
    }
}

//TODO log handling
async function handleDeleteRecord(req, res) {
    try{
        const record =await Record.findByIdAndDelete(req.params.recordId);
        fs.unlink(`./public/${record.inputImageURL}`, (err) => console.log(err));
        return res.redirect(`/`);
    }catch (error) {
        return res.render('404');
    }
}
module.exports = {
    handleAddRecord,
    handleEditRecord,
    handleDeleteRecord,
};


