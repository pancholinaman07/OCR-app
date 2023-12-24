const Record = require('../models/record');

// GET /record/history
// Render all the records
async function handleRenderHistory(req, res) {
    try{
        const queryParams = req.query;
        if (queryParams === null) {
            const records = await Record.find({});
            return res.render('history', {
                records: records,
                dob: '',
                doi: '',
                doe: ''
            });
        }
        const records = await Record.find({
            date_of_birth: queryParams.dob,
            date_of_issue: queryParams.doi,
            date_of_expiry: queryParams.doe,
        });
        return res.render('history', {
            records: records,
            dob: queryParams.dob,
            doi: queryParams.doi,
            doe: queryParams.doe
        });
    }catch (error) {
        return res.render('404');
    }
}


module.exports = {
    handleRenderHistory,
};