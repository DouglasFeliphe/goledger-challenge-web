function TableAction(props) {
    return (
        <div className='d-flex mt-5 mb-5 form-group'>
            <h2 className='flex-grow-1'>
                {props.title}
            </h2>
            <div className="form-group">
                {props.children}
            </div>
        </div>
    )
}

export default TableAction;