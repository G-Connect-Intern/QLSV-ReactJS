import { useState } from "react";
import StudentTable from "../Components/StudentTable";
import UpdatePage from "./UpdatePage";

function HomePage({ listSinhVien, handleDelete, handleUpdate, handleMultiDelete }) {
    const [currentUpdatingIndex, setCurrentUpdatingIndex] = useState(-1)
    const [currentUpdatingSinhVien, setCurrentUpdatingSinhVien] = useState({})
    const [isShowingUpdate, setIsShowingUpdate] = useState(false)
    return (
        <div className="home-page-container">
            {
                isShowingUpdate && (
                    <UpdatePage currentUpdatingIndex={currentUpdatingIndex} currentUpdatingSinhVien={currentUpdatingSinhVien} handleUpdate={handleUpdate} setIsShowingUpdate={setIsShowingUpdate}/>
                )
            }
            <StudentTable listSinhVien={listSinhVien} handleDelete={handleDelete} setCurrentUpdatingIndex={setCurrentUpdatingIndex} setCurrentUpdatingSinhVien={setCurrentUpdatingSinhVien} setIsShowingUpdate={setIsShowingUpdate} handleMultiDelete={handleMultiDelete}/>
        </div>
    );
}

export default HomePage;