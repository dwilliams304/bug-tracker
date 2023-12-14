const TicketsForm = props => {
    return(
        <div>
            <form>
                <input type="text" placeholder="Ticket Name..." />
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

            </form>
        </div>
    )
}

export default TicketsForm;