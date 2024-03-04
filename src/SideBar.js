import './Sidebar.css';
import XIcon from '@mui/icons-material/X';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <XIcon className='sidebar__twitterIcon'/>
            {/* Sidebar Option */}
            <SidebarOption active Icon={HomeIcon} text='Home' />
            <SidebarOption Icon={SearchIcon} text='Explore' />
            <SidebarOption Icon={NotificationsNoneIcon} text='Notifications' />
            <SidebarOption Icon={MailOutlineIcon} text='Messages' />
            <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks' />
            <SidebarOption Icon={ListAltIcon} text='Lists' />
            <SidebarOption Icon={PermIdentityIcon} text='Profile' />
            <SidebarOption Icon={MoreHorizIcon} text='More' />
            {/* Sidebar Option */}
            {/* Sidebar Option */}
            {/* Sidebar Option */}
            {/* Sidebar Option */}

            {/* Button -> tweet */}
            <Button variant='outlined' className='sidebar__tweet'>Tweet</Button>
        </div>
    )
}

export default Sidebar;