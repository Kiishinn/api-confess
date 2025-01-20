// Menggunakan dotenv untuk membaca file .env
require('dotenv').config();

// Import http dan app dari file app.js
const http = require('http');
const app = require('./app'); // Menyambung ke app yang sudah ada di file app.js

// Menyediakan port untuk aplikasi
const port = process.env.PORT || 3000; // Menentukan port dari environment variable atau 5000

// Membuat server dan menjalankannya di port yang ditentukan
const server = http.createServer(app);

// Server berjalan pada port yang ditentukan
server.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
