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
    new SinhVien('AT180520', 'Ta Minh Huy', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180521', 'Ta Minh Luan', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180522', 'Vu Quang Minh', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180523', 'Ta Van Thieu', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180524', 'Vu Duy Luong', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180525', 'Tran Duc Huan', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180526', 'Do Van Phuong', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180527', 'Hoang Vu Kien', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180528', 'Pham Hai Nam', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180529', 'Dam Duc Thanh', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180530', 'Pham Huy Dai', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180531', 'Vu Van Nghia', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180532', 'Pham Thi Ngan', '2003-10-12', 'Nam', 'AT'),
    new SinhVien('AT180533', 'Nguyen Thanh Phong', '2003-10-12', 'Nam', 'AT')
  ])

  function handleDelete(index) {
    let nextListSinhVien = listSinhVien.slice()
    nextListSinhVien.splice(index, 1)
    setListSinhVien(nextListSinhVien)
  }
  function handleMultiDelete(arrIdx) {
    let nextListSinhVien = listSinhVien.slice()
    for(let i = arrIdx.length - 1; i>=0; i--){
      nextListSinhVien.splice(arrIdx[i], 1)
    }
    setListSinhVien(nextListSinhVien);

  }
  function handleCreate(sv){
    let nextListSinhVien = listSinhVien.slice()
    nextListSinhVien.push(sv)
    setListSinhVien(nextListSinhVien)
  }
  function handleUpdate(index, sv){
    let nextListSinhVien = listSinhVien.slice()
    nextListSinhVien[index] = sv
    setListSinhVien(nextListSinhVien)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <MainLayout title={"Danh sách sinh viên"}>
            <HomePage listSinhVien={listSinhVien} handleDelete={handleDelete} handleUpdate={handleUpdate} handleMultiDelete={handleMultiDelete}/>
          </MainLayout>
        } />
        <Route path="/find" element={
          <MainLayout title={"Tìm kiếm sinh viên"}>
            <FindPage listSinhVien={listSinhVien} handleDelete={handleDelete} handleUpdate={handleUpdate} />
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
