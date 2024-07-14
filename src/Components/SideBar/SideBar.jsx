import './SideBar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';

const SideBar = () => {
  return (
    <div className='sideBar'>
        <div className="top">
            <span className="logo">
                SachinAdmin
            </span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <li>
                    <DashboardIcon/> 
                    <span>Dashbord</span>
                </li>
                <li>
                    <span>Users</span>
                </li>
                <li>
                    <span>Products</span>
                </li>
                <li>
                    <span>Orders</span>
                </li>
                <li>
                    <span>Delivery</span>
                </li>
                <li>
                    <span>Status</span>
                </li>
                <li>
                    <span>Notifications</span>
                </li>
                <li>
                    <span>System Helgth</span>
                </li>
                <li>
                    <span>Logs</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
                <li>
                    <span>Profile</span>
                </li>
                <li>
                    <span>Settings</span>
                </li>
            </ul>
        </div>
        <div className="bottom">

        </div>
    </div>
  )
}

export default SideBar