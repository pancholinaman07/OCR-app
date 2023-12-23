const Record = require('../models/record');

// GET /record/add
async function handleRenderAddRecord(req, res) {
    return res.json({error: 'pending'});
}

// POST /record/add redirect to /record/record id
async function handleAddRecord(req, res) {
    return res.json({error: 'pending'});
}

// GET /record/record id
async function handleRenderRecord(req, res) {
    return res.json({error: 'pending'});
}



// GET /record/edit/record:id
async function handleRenderEditRecord(req, res) {
    return res.json({error: 'pending'});
}

// POST /record/edit/record:id redirect to /record/record id
async function handleEditRecord(req, res) {
    return res.json({error: 'pending'});
}

// GET /record/history
// GET /record/record id
async function handleRenderHistory(req, res) {
    return res.json({error: 'pending'});
}

module.exports = {
    handleRenderAddRecord,
    handleAddRecord,
    handleRenderRecord,
    handleRenderEditRecord,
    handleEditRecord,
    handleRenderHistory
};


