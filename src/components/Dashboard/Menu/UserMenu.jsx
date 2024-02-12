import MenuItem from "../Sidebar/MenuItem";
import { MdGridView, MdFavorite  } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaCodePullRequest } from "react-icons/fa6";

const UserMenu = () => {
    return (
        <>
            <MenuItem
                icon={FaRegEdit}
                label='Edit Biodata'
                address='edit-biodata'
            />
            <MenuItem
                icon={MdGridView}
                label='View Biodata'
                address='view-biodata'
            />
            <MenuItem
                icon={FaCodePullRequest}
                label='My Contact Request'
                address='my-contact-request'
            />
            <MenuItem
                icon={MdFavorite}
                label='Favourites Biodata'
                address='favourites-biodata'
            />
        </>
    );
};

export default UserMenu;