import StudentTable from "../Components/StudentTable";

function HomePage({listSinhVien, handleDelete}) {
    return (
        <div className="home-page-container">
            <StudentTable listSinhVien={listSinhVien} handleDelete={handleDelete}/>
        </div>
    );
}

export default HomePage;