import { Link } from 'react-router-dom';
import NavItem from '../NavItem';

function NavBar(props) {
    return (
        <ul className='navbar-nav ml-3' >
            <h2>Goledger Challenge</h2>
            <Link to='/query/getSchema'>
                <NavItem>Schemas</NavItem>
            </Link>
            <Link to='/query/getTx'>
                <NavItem>Transactions</NavItem>
            </Link>
            <Link to='/query/getHeader'>
                <NavItem>Chains</NavItem>
            </Link>
        </ul >
    )
}


export default NavBar;