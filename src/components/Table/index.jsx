function Table(props) {

    return (
        <table className="table table-hover shadow-sm">
            {props.children}
        </table>
    )
}

export default Table;