const mongoose = require('mongoose');

const confessSchema = new mongoose.Schema({
  receiver: {  // Ganti 'title' menjadi 'receiver' (Penerima pesan)
    type: String,
    required: true,
    trim: true,
  },
  message: {  // Ganti 'description' menjadi 'message' (Isi pengakuan)
    type: String,
    default: '',
  },
  user: {  // Menghubungkan dengan pengguna yang mengirim pengakuan
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  createdAt: { type: Date, default: Date.now },
});

// Tetap menggunakan model 'Confesses'
module.exports = mongoose.model('Confesses', confessSchema);
