/*
Nama: Muhammad Putra Erlangga Syawaluddin
Kelas: XII RPL
Alamat: Kecamatan Karangploso, Kabupaten Malang

Fakta Unik:
- ReactDOM.render() akan digantikan dengan createRoot() di React 18
- StrictMode diperkenalkan di React 16.3
- React pertama kali dirilis untuk publik pada Mei 2013
- React awalnya dikembangkan untuk Feed Facebook
- Nama React dipilih karena sifatnya yang reaktif terhadap perubahan data
*/

// Mengimpor React core untuk JSX
import React from 'react';
// Mengimpor ReactDOM untuk merender ke DOM browser
import ReactDOM from 'react-dom';
// Mengimpor file CSS untuk styling aplikasi
import './index.css';
// Mengimpor komponen utama App
import App from './App';

// Merender aplikasi ke DOM
ReactDOM.render(
  // StrictMode untuk mendeteksi potensi masalah dalam aplikasi
  <React.StrictMode>
    {/* Komponen App sebagai root component */}
    <App />
  </React.StrictMode>,
  // Menarget elemen dengan id 'root' di HTML
  document.getElementById('root')
);