import { useState } from "react";
import StudentTable from "../Components/StudentTable";
import './FindPage.css'

function FindPage({listSinhVien, handleDelete}) {
    const [keyword, setKeyword] = useState("")
    console.log(keyword);
    return (
        <div className="find-page-container">
            <div className="search-txt-wrapper">
                <input type="text" className='search-txt' placeholder="Nhập tên sinh viên cần tìm kiếm..." onChange={(e) => {setKeyword(e.target.value)}} value={keyword}/> 
            </div>
            <StudentTable listSinhVien={listSinhVien} keyword={keyword} handleDelete={handleDelete}/>
        </div>
    );
}

export default FindPage;