const TaggedConfesses = require('../model/taggedModel'); // Mengimpor model 'TaggedConfesses' dari 'taggedModel.js'

// Mendapatkan semua confess dengan tags
exports.getAllTaggedConfesses = async (req, res) => {
  try {
    // Mengambil seluruh confess dengan tags yang terkait
    const confesses = await TaggedConfesses.find();

    // Jika tidak ada confess ditemukan
    if (confesses.length === 0) {
      return res.status(404).json({ message: 'Tidak ada confess dengan tags yang ditemukan' });
    }

    res.status(200).json(confesses); // Mengirimkan seluruh confess dalam format JSON
  } catch (err) {
    console.error('Error getting tagged confesses:', err);
    res.status(500).json({ message: 'Gagal mendapatkan tagged confesses', error: err.message });
  }
};

// Membuat confess baru dengan tags
exports.createTaggedConfess = async (req, res) => {
  try {
    // Memastikan bahwa body yang diterima memiliki tags
    if (!req.body.tags || !Array.isArray(req.body.tags) || req.body.tags.length === 0) {
      return res.status(400).json({ message: 'Tags harus berupa array dan tidak boleh kosong' });
    }

    // Validasi agar tags tidak kosong atau hanya terdiri dari spasi
    const cleanedTags = req.body.tags.map(tag => tag.trim()).filter(tag => tag !== '');

    if (cleanedTags.length === 0) {
      return res.status(400).json({ message: 'Tags tidak boleh hanya berupa spasi kosong' });
    }

    // Membuat objek confess baru dengan tags yang dikirimkan dalam body
    const newTaggedConfess = new TaggedConfesses({
      tags: cleanedTags,
    });

    // Menyimpan confess baru ke database
    const savedConfess = await newTaggedConfess.save();

    // Mengirimkan respons dengan data confess yang baru disimpan
    res.status(201).json(savedConfess);
  } catch (err) {
    console.error('Error creating tagged confess:', err);
    res.status(500).json({ message: 'Gagal membuat confess', error: err.message });
  }
};
