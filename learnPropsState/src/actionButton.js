const actionButton = (props) => {
    const actions = props.actions.map((action, key) => {
        return(
            <a className="dropdown-item" key={key} href="/#" onClick={props.removeCharacter}>{action}</a>
        )
    });

    return(
        <div className="dropdown show">
            <a className="btn btn-secondary dropdown-toggle" href="/#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">{actions}</div>
        </div>
    )
}

export default actionButton;