import { useState } from "react";

class SinhVien {
    constructor(MaSV, TenSV, NgaySinh, GioiTinh, MaKhoa) {
        this.MaSV = MaSV;
        this.TenSV = TenSV;
        this.NgaySinh = NgaySinh;
        this.GioiTinh = GioiTinh;
        this.MaKhoa = MaKhoa;
    }
}
function CreatePage({ handleCreate }) {
    const [mMaSV, setMMaSV] = useState("");
    const [mTenSV, setMTenSV] = useState("");
    const [mNgaySinh, setMNgaySinh] = useState("");
    const [mGioiTinh, setMGioiTinh] = useState("");
    const [mKhoa, setMKhoa] = useState("");
    const [isError, setIsError] = useState(null);
    const [isShowError, setIsShowError] = useState(false);

    function onCreate() {
        if (mMaSV !== "" && mTenSV !== "" && mNgaySinh !== "" && mGioiTinh !== "" && mKhoa !== "" && mGioiTinh !== 0) {
            handleCreate(new SinhVien(mMaSV, mTenSV, mNgaySinh, mGioiTinh === 1 ? "Nam" : "Nữ", mKhoa))
            setIsError(false)
        } else {
            setIsError(true)
        }
        showHideError()
    }
    function showHideError(){
        setIsShowError(true)
        setTimeout(() => {
            setIsShowError(false)
        }, 3000);
    }

    return (
        <div className="create-page-container">
            <div class="form-row">
                <div class="form-group col-md-2">
                    <label for="inputEmail4">Mã Sinh Viên</label>
                    <input type="text" class="form-control" id="inputEmail4" placeholder="Mã Sinh Viên" onChange={(e) => { setMMaSV(e.target.value) }} />
                </div>
                <div class="form-group col-md-10">
                    <label for="inputPassword4">Tên Sinh Viên</label>
                    <input type="text" class="form-control" id="inputPassword4" placeholder="Tên Sinh Viên" onChange={(e) => { setMTenSV(e.target.value) }} />
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="inputEmail4">Ngày sinh</label>
                    <input type="date" class="form-control" id="inputEmail4" onChange={(e) => { setMNgaySinh(e.target.value) }} />
                </div>
                <div class="form-group col-md-6">
                    <label for="inputPassword4">Giới Tính</label>
                    <select class="custom-select mr-sm-2" id="inlineFormCustomSelect" onChange={(e) => { setMGioiTinh(e.target.value) }}>
                        <option selected>Choose...</option>
                        <option value="1">Nam</option>
                        <option value="2">Nữ</option>
                    </select>
                </div>
            </div>
            <div class="form-row">
                <div class="form-group col-md-12">
                    <label for="inputCity">Khoa</label>
                    <input type="text" class="form-control" placeholder="Khoa" onChange={(e) => { setMKhoa(e.target.value) }} />
                </div>
            </div>
            <button type="submit" class="btn btn-primary" onClick={onCreate}>Thêm Sinh Viên</button>
            <br />
            <br />
            <br />
            {
                (isError && isShowError &&
                    <div class="alert alert-danger" role="alert">
                        Vui lòng điền đầy đủ thông tin
                    </div>
                )
            }
            {

                (!isError &&  isShowError &&
                    <div class="alert alert-success" role="alert">
                        Thêm thành công!
                    </div>
                )
            }
        </div>
    );
}

export default CreatePage;