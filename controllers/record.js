const Record = require('../models/record');

// GET /record/add
async function handleRenderAddRecord(req, res) {
    return res.json({error: 'RenderAddRecord'});
}

// POST /record/add redirect to /record/record id
async function handleAddRecord(req, res) {
    return res.json({error: 'AddRecord'});
}

// GET /record/record id
async function handleRenderRecord(req, res) {
    return res.json({error: 'RenderRecord'});
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


