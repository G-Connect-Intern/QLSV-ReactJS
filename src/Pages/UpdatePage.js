import { useEffect, useState } from "react";
import './UpdatePage.css'

class SinhVien {
    constructor(MaSV, TenSV, NgaySinh, GioiTinh, MaKhoa) {
        this.MaSV = MaSV;
        this.TenSV = TenSV;
        this.NgaySinh = NgaySinh;
        this.GioiTinh = GioiTinh;
        this.MaKhoa = MaKhoa;
    }
}
function UpdatePage({ handleUpdate, currentUpdatingIndex, currentUpdatingSinhVien, setIsShowingUpdate }) {
    const [mMaSV, setMMaSV] = useState("");
    const [mTenSV, setMTenSV] = useState("");
    const [mNgaySinh, setMNgaySinh] = useState("");
    const [mGioiTinh, setMGioiTinh] = useState("");
    const [mKhoa, setMKhoa] = useState("");
    const [isError, setIsError] = useState(null);
    const [isShowError, setIsShowError] = useState(false);

    useEffect(() => {
        console.log('changed!');
        console.log(currentUpdatingSinhVien);
        console.log(currentUpdatingIndex);
        setMMaSV(currentUpdatingSinhVien.maSinhVien)
        setMTenSV(currentUpdatingSinhVien.tenSinhVien)
        setMNgaySinh(currentUpdatingSinhVien.ngaySinh)
        setMGioiTinh(currentUpdatingSinhVien.gioiTinh)
        setMKhoa(currentUpdatingSinhVien.khoaId)
    }, [currentUpdatingSinhVien])

    function onUpdate() {
        if (mMaSV !== "" && mTenSV !== "" && mNgaySinh !== "" && mGioiTinh !== "" && mKhoa !== "" && mGioiTinh !== 0) {
            let s = {
                "maSinhVien": mMaSV,
                "tenSinhVien": mTenSV,
                "ngaySinh": mNgaySinh,
                "gioiTinh": mGioiTinh,
                "khoaId": mKhoa
            }
            handleUpdate(currentUpdatingIndex, s)
            setIsError(false)
            setTimeout(() => {
                setIsShowingUpdate(false)
            }, 3000)
        } else {
            setIsError(true)
        }
        showHideError()
    }
    function showHideError() {
        setIsShowError(true)
        setTimeout(() => {
            setIsShowError(false)
        }, 3000);
    }

    return (
        <div className="update-page-container">
            <h2 className="update-page-title">C???p nh???t sinh vi??n</h2>
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label for="inputEmail4">M?? Sinh Vi??n</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="M?? Sinh Vi??n" onChange={(e) => { setMMaSV(e.target.value) }} value={mMaSV} />
                </div>
                <div class="form-group col-md-10">
                    <label for="inputPassword4">T??n Sinh Vi??n</label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="T??n Sinh Vi??n" onChange={(e) => { setMTenSV(e.target.value) }} value={mTenSV} />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Ng??y sinh</label>
                    <input type="date" class="form-control" id="inputEmail4" onChange={(e) => { setMNgaySinh(e.target.value) }} value={mNgaySinh} />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Gi???i T??nh</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => { setMGioiTinh(e.target.value) }} value={mGioiTinh}>
                        <option selected>Choose...</option>
                        <option value="Nam">Nam</option>
                        <option value="N???">N???</option>
                    </select>
                </div>
            </div>
            <div class="form-row" style={{padding: "4px"}}>
                <label for="inputCity">Khoa</label>
                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => { setMKhoa(e.target.value) }}>
                    <option selected>Choose...</option>
                    <option value="1">C??ng ngh??? th??ng tin</option>
                    <option value="2">??i???n t??? vi???n th??ng</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary" onClick={onUpdate}>C???p Nh???t Sinh Vi??n</button>
            <br />
            <br />
            <br />
            {
                (isError && isShowError &&
                    <div class="alert alert-danger" role="alert">
                        Vui l??ng ??i???n ?????y ????? th??ng tin
                    </div>
                )
            }
            {

                (!isError && isShowError &&
                    <div class="alert alert-success" role="alert">
                        C???p nh???t th??nh c??ng!
                    </div>
                )
            }
        </div>
    );
}

export default UpdatePage;