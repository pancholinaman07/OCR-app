const Record = require('../models/record');
const path = require("path");


// GET /record/add
async function handleRenderAddRecord(req, res) {
    return res.render('addRecord');
}

// POST /record/add redirect to /record/record id
async function handleAddRecord(req, res) {
    //todo testing right now
    const record = await Record.create({
        inputImageURL:  `/uploads/${req.file.filename}`,
        identification_number: '1111',
        name: 'naman',
        last_name: 'pancholi',
        date_of_birth: '30-07-2001',
        date_of_issue: '20-07-2003',
        date_of_expiry: '20-07-2019'
    });
    return res.redirect(`/record/${record._id}`);
}

// GET /record/record id
// TODO error handling
async function handleRenderRecord(req, res) {
    const record = await Record.findById(req.params.recordId);
    console.log(record);
    return res.render('record', {
        record: record
    });
}



// GET /record/edit/record:id
async function handleRenderEditRecord(req, res) {
    return res.json({error: 'RenderRecord'});
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


