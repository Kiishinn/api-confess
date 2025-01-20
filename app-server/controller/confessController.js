const Confesses = require('../model/confessModel'); // Mengimpor model 'Confesses'

// Mendapatkan semua confess
exports.getAllConfesses = async (req, res) => {
  try {
    const confesses = await Confesses.find().populate('user', 'name email'); // Pastikan populate dilakukan
    res.status(200).json(confesses);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mendapatkan confesses', error: err.message });
  }
};


// Mendapatkan confess berdasarkan ID
exports.getConfessById = async (req, res) => {
  try {
    const confess = await Confesses.findById(req.params.id).populate('user', 'name email');
    if (!confess) {
      return res.status(404).json({ message: 'Confess tidak ditemukan' });
    }
    res.status(200).json(confess);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mendapatkan confess', error: err.message });
  }
};
  
// Membuat confess baru
exports.createConfess = async (req, res) => {
  try {
    console.log('Request body:', req.body);  // Menambahkan log untuk melihat data yang dikirim
    const newConfess = new Confesses({  
      receiver: req.body.receiver,
      message: req.body.message,
      user: req.body.user, // Pastikan ID user dikirim dengan benar
    });

    const savedConfess = await newConfess.save();
    res.status(201).json(savedConfess);
  } catch (err) {
    console.error('Error in createConfess:', err);  // Menambahkan log error
    res.status(500).json({ message: 'Gagal membuat confess', error: err.message });
  }
};


// Mengupdate confess berdasarkan ID
exports.updateConfess = async (req, res) => {
  try {
    const confess = await Confesses.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!confess) {
      return res.status(404).json({ message: 'Confess tidak ditemukan' });
    }
    res.status(200).json(confess);
  } catch (err) {
    res.status(500).json({ message: 'Gagal mengupdate confess', error: err.message });
  }
};

// Menghapus confess berdasarkan ID
exports.deleteConfess = async (req, res) => {
  try {
    const confess = await Confesses.findByIdAndDelete(req.params.id);
    if (!confess) {
      return res.status(404).json({ message: 'Confess tidak ditemukan' });
    }
    res.status(200).json({ message: 'Confess berhasil dihapus' });
  } catch (err) {
    res.status(500).json({ message: 'Gagal menghapus confess', error: err.message });
  }
};
