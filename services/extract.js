const { convertToDate } = require('./conv');

// Extract Relevant from google text
function extract(text){

    try{

        // Extract Identification Number
        const idNumberMatch = text.match(/(\d{1,4}\s\d{4}\s\d{5}\s\d{2}\s\d{1})/);
        const identification_number = idNumberMatch ? idNumberMatch[0] : null;

        // Extract Name
        const nameMatch = text.match(/Name (.+?)\n/);
        const name = nameMatch ? nameMatch[1] : null;

        // Extract Last Name
        const lastNameMatch = text.match(/Last name (.+?)\n/);
        const last_name = lastNameMatch ? lastNameMatch[1] : null;

        // Extract Dates
        const dateMatches = text.match(/(\d{1,2} [A-Za-z]+\.* \d{4})/g);

        if (dateMatches === null || dateMatches.length !== 3) {
            return {
                status: 'FAILURE',
                identification_number,
                name,
                last_name,
                date_of_birth: '',
                date_of_issue: '',
                date_of_expiry: ''
            };
        }

        // Assign dates to variables
        const date_of_birth = dateMatches ? convertToDate(dateMatches[0]) : null;
        const date_of_issue = dateMatches ? convertToDate(dateMatches[1]) : null;
        const date_of_expiry = dateMatches ? convertToDate(dateMatches[2]) : null;

        const record = {
                identification_number,
                name,
                last_name,
                date_of_birth,
                date_of_issue,
                date_of_expiry
        }
        if (
            identification_number !== null &&
            name !== null &&
            last_name !== null &&
            date_of_birth != null &&
            date_of_issue !== null &&
            date_of_expiry !== null) {
            record.status = 'SUCCESS';
            return record;
        }

        record.status = 'FAILURE';
        return record;

    }catch(e) {

        console.log('error in google api call', e);

        const record = {
            identification_number : '',
            name : '',
            last_name : '',
            date_of_birth : '',
            date_of_issue : '',
            date_of_expiry : ''
        }
        record.status = 'FAILURE';

        return record;
    }

}

module.exports = {
    extract
};