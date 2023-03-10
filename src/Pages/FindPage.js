import { useState } from "react";
import StudentTable from "../Components/StudentTable";
import './FindPage.css'
import UpdatePage from "./UpdatePage";

function FindPage({listSinhVien, handleDelete, handleUpdate, handleMultiDelete}) {
    const [keyword, setKeyword] = useState("")
    const [currentUpdatingIndex, setCurrentUpdatingIndex] = useState(-1)
    const [currentUpdatingSinhVien, setCurrentUpdatingSinhVien] = useState({})
    const [isShowingUpdate, setIsShowingUpdate] = useState(false)
    return (
        <div className="find-page-container">
            <div className="search-txt-wrapper">
                <input type="text" className='search-txt' placeholder="Nhập tên sinh viên cần tìm kiếm..." onChange={(e) => {setKeyword(e.target.value)}} value={keyword}/> 
            </div>
            {
                isShowingUpdate && (
                    <UpdatePage currentUpdatingIndex={currentUpdatingIndex} currentUpdatingSinhVien={currentUpdatingSinhVien} handleUpdate={handleUpdate} setIsShowingUpdate={setIsShowingUpdate}/>
                )
            }
            <StudentTable listSinhVien={listSinhVien} handleDelete={handleDelete} setCurrentUpdatingIndex={setCurrentUpdatingIndex} setCurrentUpdatingSinhVien={setCurrentUpdatingSinhVien} setIsShowingUpdate={setIsShowingUpdate} keyword={keyword} handleMultiDelete={handleMultiDelete}/>
        </div>
    );
}

export default FindPage;