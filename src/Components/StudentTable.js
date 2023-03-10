import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import './StudentTable.css'

function StudentTable({ listSinhVien, keyword, handleDelete, setCurrentUpdatingIndex, setCurrentUpdatingSinhVien, setIsShowingUpdate, handleMultiDelete }) {
    const [listChecked, setListChecked] = useState([])
    function onCheck(index, isChecked) {
        if (isChecked) {
            let nextListChecked = listChecked.slice()
            nextListChecked.push(index)
            nextListChecked.sort()
            setListChecked(nextListChecked)
        } else {
            let nextListChecked = listChecked.slice()
            let idx = nextListChecked.indexOf(index)
            nextListChecked.splice(idx, 1)
            nextListChecked.sort()
            setListChecked(nextListChecked)
        }
    }
    function onMultiRemove() {
        handleMultiDelete(listChecked)
        setListChecked([])
    }
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th><button onClick={onMultiRemove}>Xóa</button></th>
                    <th>Mã SV</th>
                    <th>Tên sinh viên</th>
                    <th>Ngày sinh</th>
                    <th>Giới tính</th>
                    <th>Khoa</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    Array.isArray(listSinhVien) && !keyword
                        ? listSinhVien.map((SinhVien, index) => (
                            <tr key={index}>
                                <td><input type='checkbox' onChange={(e) => { onCheck(index, e.target.checked); }} checked={listChecked.includes(index)} /></td>
                                <td>{SinhVien.maSinhVien}</td>
                                <td>{SinhVien.tenSinhVien}</td>
                                <td>{SinhVien.ngaySinh}</td>
                                <td>{SinhVien.gioiTinh}</td>
                                <td>{SinhVien.khoa.tenKhoa}</td>
                                <td>
                                    <button className='edit-btn action-btn' onClick={() => { setCurrentUpdatingSinhVien(listSinhVien[index]); setCurrentUpdatingIndex(index); setIsShowingUpdate(true) }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                    <button className='delete-btn action-btn' onClick={() => { handleDelete(SinhVien.sinhVienId) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                </td>
                            </tr>
                        )) : null
                }
                {
                    Array.isArray(listSinhVien) && keyword
                        ? listSinhVien.map(function (SinhVien, index) {
                            return (
                                SinhVien.tenSinhVien.includes(keyword) &&
                                <tr key={index}>
                                    <td><input type='checkbox' onChange={(e) => { onCheck(index, e.target.checked) }} checked={listChecked.includes(index)} /></td>
                                    <td>{SinhVien.maSinhVien}</td>
                                    <td>{SinhVien.tenSinhVien}</td>
                                    <td>{SinhVien.ngaySinh}</td>
                                    <td>{SinhVien.gioiTinh}</td>
                                    <td>{SinhVien.khoa.tenKhoa}</td>
                                    <td>
                                        <button className='edit-btn action-btn' onClick={() => { setCurrentUpdatingSinhVien(listSinhVien[index]); setCurrentUpdatingIndex(index); setIsShowingUpdate(true) }}><FontAwesomeIcon icon={faPenToSquare} /></button>
                                        <button className='delete-btn action-btn' onClick={() => { handleDelete(SinhVien.sinhVienId) }}><FontAwesomeIcon icon={faTrashCan} /></button>
                                    </td>
                                </tr>
                            )
                        }) : null
                }
            </tbody>
        </table>
    );
}

export default StudentTable;