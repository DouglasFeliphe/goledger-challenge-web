function Button(props) {
    let type = 'info'

    if (props.type !== undefined) {
        type = props.type
    }

    console.log(type);

    return (
        <button
            className={`btn btn-${type} rounded mr-5`}
            onClick={props.onClick} >
            <i className={props.icon}></i> { props.children}
        </button >
    )
}

export default Button;