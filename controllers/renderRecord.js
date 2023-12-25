const Record = require('../models/record');

// GET /record/add
// Render the Add-Record Page
async function handleRenderAddRecord(req, res) {

    return res.render('addRecord');

}

// GET /record/:recordId
// Render a particular record
async function handleRenderRecord(req, res) {
    try {

        // Find the Record By ID
        const record = await Record.findById(req.params.recordId);

        return res.render('record', {
            record: record
        });

    }catch (error) {

        console.log('error while finding record in Render Record', error);
        return res.render('404');

    }
}

// GET /record/edit/:recordId
// Render the Edit Record Page
async function handleRenderEditRecord(req, res) {
    try {

        // Find the Record By ID
        const record = await Record.findById(req.params.recordId);

        return res.render('editRecord', {
            record: record
        });

    }catch (error) {

        console.log('error while finding record in Render Edit Record', error);
        return res.render('404');

    }
}

module.exports = {
    handleRenderAddRecord,
    handleRenderRecord,
    handleRenderEditRecord,
};