import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './StudentTable.css'

function StudentTable({ listSinhVien, keyword, handleDelete }) {
    console.log(listSinhVien);
    console.log(handleDelete);
    console.log(keyword);
    return (
        <table className="styled-table">
            <thead>
                <tr>
                    <th></th>
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
                                <td><input type='checkbox' /></td>
                                <td>{SinhVien.MaSV}</td>
                                <td>{SinhVien.TenSV}</td>
                                <td>{SinhVien.NgaySinh}</td>
                                <td>{SinhVien.GioiTinh}</td>
                                <td>{SinhVien.MaKhoa}</td>
                                <td>
                                    <button className='edit-btn action-btn'><FontAwesomeIcon icon={faPenToSquare} /></button>
                                        <button className='delete-btn action-btn' onClick={() => {handleDelete(index)}}><FontAwesomeIcon icon={faTrashCan} /></button>
                                </td>
                            </tr>
                        )) : null
                }
                {
                    Array.isArray(listSinhVien) && keyword
                        ? listSinhVien.map(function (SinhVien, index) {
                            return (
                                SinhVien.TenSV.includes(keyword) &&
                                <tr key={index}>
                                    <td><input type='checkbox' /></td>
                                    <td>{SinhVien.MaSV}</td>
                                    <td>{SinhVien.TenSV}</td>
                                    <td>{SinhVien.NgaySinh}</td>
                                    <td>{SinhVien.GioiTinh}</td>
                                    <td>{SinhVien.MaKhoa}</td>
                                    <td>
                                        <button className='edit-btn action-btn'><FontAwesomeIcon icon={faPenToSquare} /></button>
                                        <button className='delete-btn action-btn' onClick={() => {handleDelete(index)}}><FontAwesomeIcon icon={faTrashCan} /></button>
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