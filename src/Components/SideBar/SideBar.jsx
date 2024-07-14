import './SideBar.scss';
// matrial icons links
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import AnchorIcon from '@mui/icons-material/Anchor';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

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
                <p className="title">MAINS</p>
                <li>
                    <DashboardIcon className='icons' /> 
                    <span>Dashbord</span>
                </li>
                <li>
                    <GroupIcon className='icons' />
                    <span>Users</span>
                </li>
                <li>
                    <Inventory2Icon className='icons' />
                    <span>Products</span>
                </li>
                <li>
                    <BorderAllIcon className='icons' />
                    <span>Orders</span>
                </li>
                <li>
                    <DeliveryDiningIcon className='icons' />
                    <span>Delivery</span>
                </li>
                <p className="title">SYSTEM</p>
                <li>
                    <AutorenewIcon className='icons' />
                    <span>Status</span>
                </li>
                <li>
                    <NotificationsActiveIcon className='icons' />
                    <span>Notifications</span>
                </li>
                <li>
                    <LocalHospitalIcon className='icons' />
                    <span>System Helgth</span>
                </li>
                <li>
                    <AnchorIcon className='icons' />
                    <span>Logs</span>
                </li>
                <li>
                    <SettingsIcon className='icons' />
                    <span>Settings</span>
                </li>
                <p className="title">USER</p>
                <li>
                    <ManageAccountsIcon className='icons' />
                    <span>Profile</span>
                </li>
                <li>
                    <LogoutIcon className='icons' />
                    <span>Log Out</span>
                </li>
                <p className="title">COLOUR OPTIONS</p>
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption">

            </div>
            <div className="colorOption">
                
            </div>
        </div>
    </div>
  )
}

export default SideBar