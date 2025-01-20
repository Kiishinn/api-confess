const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

const taggedConfessSchema = new mongoose.Schema({
  tags: {
    type: [String], // Array of strings untuk menyimpan tags
    required: true, // Membuat field tags wajib ada
  },
});

taggedConfessSchema.plugin(uniqueValidator);

module.exports = mongoose.model('TaggedConfess', taggedConfessSchema);
