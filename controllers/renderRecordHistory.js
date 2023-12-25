const Record = require('../models/record');

// GET /record/history
// Render all the records
async function handleRenderHistory(req, res) {
    try{

        //  Getting URL Params
        const queryParams = req.query;

        // Query Created using queryParams
        const query = {};
        if(queryParams.dob && queryParams.dob !== '') query.date_of_birth = queryParams.dob;
        if(queryParams.doi && queryParams.doi !== '') query.date_of_issue = queryParams.doi;
        if(queryParams.doe && queryParams.doe !== '') query.date_of_expiry = queryParams.doe;
        if(queryParams.success && queryParams.success === 'on' && queryParams.failure !== 'on') query.status = 'SUCCESS';
        if(queryParams.failure && queryParams.failure === 'on' && queryParams.success !== 'on') query.status = 'FAILURE';

        // Records Find using desire filter query
        const records = await Record.find(query);

        // Render again on history
        return res.render('history', {
            records: records,
            dob: queryParams.dob,
            doi: queryParams.doi,
            doe: queryParams.doe,
        });

    }catch (error) {

        // Any wrong queryParams edited by User result in 404
        console.log('error while filtering data', error);
        return res.render('404');

    }
}

// exports
module.exports = {
    handleRenderHistory,
};