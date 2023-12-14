import RolesForm from '../forms/RolesForm';

const RolesMenu = () => {
    return(
        <>
            <h4>Create or edit roles.</h4>
            <button className='create'>Create new Role</button>
            <RolesForm />
        </>
    )
}

export default RolesMenu;