/*
Nama: Muhammad Putra Erlangga Syawaluddin
Kelas: XII RPL
Alamat: Kecamatan Karangploso, Kabupaten Malang

Fakta Unik:
- React Hooks diperkenalkan pada React 16.8 tahun 2019
- useState adalah Hook yang paling sering digunakan
- React dikembangkan oleh Facebook (sekarang Meta) pada tahun 2011
- Component-based architecture React terinspirasi dari XHP (PHP Framework)
- Virtual DOM React dapat meningkatkan performa hingga 60%
*/

// Mengimpor useState hook dari React untuk manajemen state
import { useState } from "react";
// Mengimpor komponen Header yang berisi form input todo
import Header from "./components/Header";
// Mengimpor komponen TodoList yang menampilkan daftar todo
import TodoList from "./components/TodoList";

// Komponen utama aplikasi
function App() {
  // State untuk mengontrol refresh data todo
  // isRefresh: nilai boolean untuk status refresh
  // setIsRefresh: fungsi untuk mengubah state isRefresh
  const [isRefresh, setIsRefresh] = useState(true)

  // Fungsi untuk mengatur status refresh
  // Menerima parameter status yang akan diset ke state isRefresh
  const setRefresh = (status) => {
    setIsRefresh(status)
  }

  // Render komponen utama
  return (
    // Container utama aplikasi
    <div className="App">
      {/* Wrapper konten dengan max-width */}
      <div className="content">
        {/* Komponen Header dengan prop setRefresh untuk update data */}
        <Header setRefresh={setRefresh} />
        {/* Komponen TodoList dengan prop setRefresh dan isRefresh untuk sinkronisasi data */}
        <TodoList setRefresh={setRefresh} isRefresh={isRefresh} />
      </div>
    </div>
  );
}

// Ekspor komponen App agar bisa digunakan di file lain
export default App;