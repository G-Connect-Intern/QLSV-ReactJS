import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CreatePage from './Pages/CreatePage';
import UpdatePage from './Pages/UpdatePage';
import MainLayout from './Layout/MainLayout';
import { useState, useEffect } from 'react';
import FindPage from './Pages/FindPage';

function App() {

  const [listSinhVien, setListSinhVien] = useState([])

  // Fetch

  useEffect(() => {
    console.log('Fetching...');
    fetch("https://localhost:7187/api/SinhVien")
      .then(res => res.json())
      .then(
        (result) => {
          setListSinhVien(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
  }, [])

  function handleDelete(sinhVienId) {
    console.log(sinhVienId);
    fetch(`https://localhost:7187/api/SinhVien/${sinhVienId}`, {method: "DELETE"})
    .then(() => {
      fetch("https://localhost:7187/api/SinhVien")
      .then(res => res.json())
      .then(
        (result) => {
          setListSinhVien(result)
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          console.log(error);
        }
      )
    })
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
            <CreatePage handleCreate={handleCreate} handleSetListSinhVien={setListSinhVien}/>
          </MainLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
