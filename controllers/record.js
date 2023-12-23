const Record = require('../models/record');
const path = require("path");


// GET /record/add
async function handleRenderAddRecord(req, res) {
    return res.render('addRecord');
}

// POST /record/add redirect to /record/record id
async function handleAddRecord(req, res) {
    //todo testing right now
    // const record = await Record.create({
    //     inputImageURL:  `/uploads/${req.file.filename}`,
    //     identification_number: '1111',
    //     name: 'naman',
    //     last_name: 'pancholi',
    //     date_of_birth: '30-07-2001',
    //     date_of_issue: '20-07-2003',
    //     date_of_expiry: '20-07-2019'
    // });
    const record = await Record.create({
            inputImageURL:  `/uploads/${req.file.filename}`,
            status: 'FAILURE'
        })
    return res.redirect(`/record/${record._id}`);
}

// GET /record/record id
async function handleRenderRecord(req, res) {
    try {
        const record = await Record.findById(req.params.recordId);
        return res.render('record', {
            record: record
        });
    }catch (error) {
        return res.render('404');
    }
}

// GET /record/edit/record:id
async function handleRenderEditRecord(req, res) {
    try {
        const record = await Record.findById(req.params.recordId);
        return res.render('editRecord', {
            record: record
        });
    }catch (error) {
        return res.render('404');
    }
}

// POST /record/edit/record:id redirect to /record/record id
async function handleEditRecord(req, res) {
    return res.json({error: 'EditRecord'});
}

// GET /record/history
// GET /record/record id
async function handleRenderHistory(req, res) {
    return res.json({error: 'History'});
}

module.exports = {
    handleRenderAddRecord,
    handleAddRecord,
    handleRenderRecord,
    handleRenderEditRecord,
    handleEditRecord,
    handleRenderHistory
};


