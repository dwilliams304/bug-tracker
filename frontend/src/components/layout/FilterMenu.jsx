

export default function FilterMenu(){
    return(
        <div className="filter-menu">
            <h2>Filters</h2>
            <nav className="filter-buttons">
                <select id="project-name" name="project-name">
                    <option value="Project 1">Project 1</option>
                    <option value="Project 2">Project 2</option>
                    <option value="Project 3">Project 3</option>

                </select>
                

                <select id="ticket-severity" name="ticket-severity">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Severe">Severe</option>
                    <option value="Immediate">Immediate</option>

                </select>


                <select id="ticket-status" name="ticket-status">
                    <option value="To Do">To Do</option>
                    <option value="Open">Open</option>
                    <option value="In Progress">In Progress</option>
                    <option value="In Testing">In Testing</option>
                    <option value="Closed">Closed</option>
                    <option value="Resolved">Resolved</option>

                </select>

                <select id="tags" name="tags">
                    <option value="ui">UI</option>
                    <option value="internal">Internal</option>
                    <option value="data">Data</option>
                    <option value="security">Security</option>
                    <option value="users">Users</option>

                </select>

            </nav>
        </div>
    )
}