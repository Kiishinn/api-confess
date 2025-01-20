const express = require('express');
const router = express.Router();
const confessController = require('../controller/confessController'); // Pastikan path sesuai dengan lokasi controller Anda

// Mendapatkan semua confess
router.get('/all', confessController.getAllConfesses);

// Mendapatkan confess berdasarkan ID
router.get('/:id', confessController.getConfessById);

// Membuat confess baru
router.post('/', confessController.createConfess);

// Mengupdate confess berdasarkan ID
router.put('/:id', confessController.updateConfess);

// Menghapus confess berdasarkan ID
router.delete('/:id', confessController.deleteConfess);

module.exports = router;
