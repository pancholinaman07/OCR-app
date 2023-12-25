const { Schema, model } = require('mongoose');

const ocrSchema = new Schema({
        inputImageURL: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            enum: ['SUCCESS', 'FAILURE'],
            default: 'SUCCESS',
        },
        identification_number: {
            type: String,
        },
        name: {
            type: String,
        },
        last_name: {
            type: String,
        },
        date_of_birth: {
            type: String,
        },
        date_of_issue: {
            type: String,
        },
        date_of_expiry: {
            type: String,
        },
        createdAt: {
            type: String,
        },
        updatedAt: {
            type: String,
        },
}
);

const Record = model('record', ocrSchema);

module.exports = Record;