

export default function FilterMenu(){
    return(
        <nav>
            <select id="project-name" name="project-name">
                <option value="Value 1">Value 1</option>
                <option value="Value 2">Value 2</option>
                <option value="Value 3">Value 3</option>
            </select>
            
            <select id="ticket-status" name="ticket-status">
                <option value="To Do">To Do</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="In Testing">In Testing</option>
                <option value="Closed">Closed</option>
                <option value="Resolved">Resolved</option>

            </select>

        </nav>
    )
}