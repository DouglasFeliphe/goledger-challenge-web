import NavItem from '../NavItem';

function NavBarHor() {
    return (

        <ul className='navbar-nav navbar-nav shadow rounded navbar-expand d-flex justify-content-end pl-4 pr-4' >
            <NavItem icon='fas fa-user'></NavItem>
            <NavItem icon='fas fa-cog'></NavItem>
        </ul>
    )
}

export default NavBarHor;