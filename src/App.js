import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreatePage from './Pages/CreatePage';
import UpdatePage from './Pages/UpdatePage';
import MainLayout from './Layout/MainLayout';
import { useState } from 'react';
import FindPage from './Pages/FindPage';

class SinhVien {
  constructor(MaSV, TenSV, NgaySinh, GioiTinh, MaKhoa) {
    this.MaSV = MaSV;
    this.TenSV = TenSV;
    this.NgaySinh = NgaySinh;
    this.GioiTinh = GioiTinh;
    this.MaKhoa = MaKhoa;
  }
}


function App() {

  const [listSinhVien, setListSinhVien] = useState([
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Huy', '12/10/2003', 'Nam', 'AT'),
    new SinhVien('123', 'Ta Minh Luan', '12/10/2003', 'Nam', 'AT')
  ])

  function handleDelete(index) {
    let nextListSinhVien = listSinhVien.slice()
    nextListSinhVien.splice(index, 1)
    setListSinhVien(nextListSinhVien)
  }
  function handleCreate(sv){
    let nextListSinhVien = listSinhVien.slice()
    nextListSinhVien.push(sv)
    setListSinhVien(nextListSinhVien)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <MainLayout title={"Danh sách sinh viên"}>
            <HomePage listSinhVien={listSinhVien} handleDelete={handleDelete} />
          </MainLayout>
        } />
        <Route path="/find" element={
          <MainLayout title={"Tìm kiếm sinh viên"}>
            <FindPage listSinhVien={listSinhVien} handleDelete={handleDelete} />
          </MainLayout>
        } />
        <Route path="/create" element={
          <MainLayout title={"Thêm sinh viên"}>
            <CreatePage handleCreate={handleCreate}/>
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
