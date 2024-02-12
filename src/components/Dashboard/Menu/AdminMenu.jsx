import { FaUserCog } from "react-icons/fa";
import MenuItem from "../Sidebar/MenuItem";
import { BsGraphUp } from 'react-icons/bs'
import { BsFillHouseAddFill } from "react-icons/bs";
import { MdOutlineManageHistory } from "react-icons/md";

const AdminMenu = () => {
    return (
        <>
            {/* Menu Items */}
            <MenuItem
                icon={BsGraphUp}
                label='Admin Dashboard'
                address='/dashboard'
            />
            <MenuItem
                icon={BsFillHouseAddFill}
                label='Manage Users'
                address='manage-users'
            />
            <MenuItem
                icon={FaUserCog}
                label='Approved Premium'
                address='approved-premium'
            />
            <MenuItem
                icon={MdOutlineManageHistory}
                label='Approved Contact Request'
                address='approved-contact-request'
            />
        </>
    );
};

export default AdminMenu;