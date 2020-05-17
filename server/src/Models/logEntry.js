const mongoose = require('mongoose');

const { Schema } = mongoose;

const logEntrySchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    comments: { type: String },
    rating: { type: Number, min: 1, max: 10 },
    image: { type: String },
    lattitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    visitDate: { type: Date, required: true }
}, {
    timestamps: true
});

const LogEntry = mongoose.model('LogEntry', logEntrySchema);
module.exports = LogEntry;