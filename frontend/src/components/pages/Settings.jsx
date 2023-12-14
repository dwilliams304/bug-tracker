import '../../styles/page-styles/settings.css';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import ContactsIcon from '@mui/icons-material/Contacts';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { RolesForm, TicketsForm, UsersForm } from './settings/index';


const Settings = () => {
    return(
        <div className="settings">
            <aside className="sidebar">
                <a href='#' className='active'> <EmojiPeopleIcon />
                    <h3>Roles</h3>
                </a>
                <a href='#'><ContactsIcon />
                    <h3>Users</h3>
                </a>
                <a href='#'><ReceiptLongIcon />
                    <h3>Tickets</h3>
                </a>
                <a href='#'><SettingsIcon />
                    <h3>General</h3>
                </a>
                <a href='#'><InfoIcon />
                    <h3>Info</h3>
                </a>

                <a href='#'><ExitToAppIcon />
                    <h3>Logout</h3>
                </a>
            </aside>
            <div className="menu">
                <RolesForm />
                <TicketsForm />
                <UsersForm />
            </div>
        </div>
    )
}

export default Settings;