import React from 'react';
import { Link , Redirect} from 'react-router-dom'
const Nav = () => {
    return (
        <React.Fragment>
            <ul>
                <li> <Link to='/dashboard'> Dashboard</Link></li>
                <li> <Link to='/settings'> Settings</Link></li>
                <li> <Link to='/reports'> Reports</Link></li>
            </ul>
       {false && <Redirect to='test'></Redirect>}
        </React.Fragment>
    );
};
export default Nav;