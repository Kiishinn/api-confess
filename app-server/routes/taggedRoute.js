const express = require('express');
const router = express.Router();
const taggedController = require('../controller/taggedController'); // Pastikan path sesuai

// Mendapatkan semua tagged confesses
router.get('/all', taggedController.getAllTaggedConfesses);

// Membuat tagged confess baru
router.post('/', taggedController.createTaggedConfess);

module.exports = router;
