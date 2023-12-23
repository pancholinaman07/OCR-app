const { Schema, model } = require('mongoose');

const ocrSchema = new Schema({
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
            type: Date,
        },
        date_of_issue: {
            type: Date,
        },
        date_of_expiry: {
            type: Date,
        }
},
{timestamps: true}
);

const Record = model('ocr', ocrSchema);

module.exports = Record;