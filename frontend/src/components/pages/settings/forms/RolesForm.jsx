const RolesForm = props => {
    return(
        <div>
            <form className="roles-form">
                <input type="text" placeholder="Role name..." />
                <div>
                    <h3>Priviliges</h3>
                    <label> Create new Roles
                        <input type="checkbox"/>
                    </label>
                    <label> Create new Users
                        <input type="checkbox"/>
                    </label>
                    <label> Create new Tickets
                        <input type="checkbox"/>
                    </label>
                </div>
            </form>
        </div>
    )
}

export default RolesForm;