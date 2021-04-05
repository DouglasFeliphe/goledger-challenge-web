
function NavItem(props) {
    return (
        <li className="nav-item ml-5">
            <i className="nav-link">
                <span className={props.icon} />
            </i>
            {props.children}
        </li>
    )
}

export default NavItem;