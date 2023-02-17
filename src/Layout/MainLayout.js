import './MainLayout.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRectangleList, faSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function MainLayout({ children, title }) {
    return (
        <div className="layout-container">
            <div className='nav-bar'>
                <div className='nav-bar-head'>Menu</div>
                <div className='nav-bar-body'>
                    <ul>
                        <Link to="/" className='link-tag'><li><div className='icon'><FontAwesomeIcon icon={faRectangleList} /></div>Danh sách sinh viên</li></Link>
                        <Link to="/find" className='link-tag'><li><div className='icon'><FontAwesomeIcon icon={faSearchengin} /></div>Tìm kiếm sinh viên</li></Link>
                        <Link to="/create" className='link-tag'><li><div className='icon'><FontAwesomeIcon icon={faSquarePlus} /></div>Thêm sinh viên</li></Link>
                    </ul>
                </div>
            </div>
            <div className='content-container'>
                <div className='content-head'>
                    <h2 className='content-title'>{title}</h2>
                </div>
                <div className='content-body'>
                    {children}
                </div>
            </div>
        </div>
    );
}

export default MainLayout;