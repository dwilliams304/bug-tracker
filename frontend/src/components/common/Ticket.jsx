

export default function Ticket(props){
    const {ticket} = props;
    return(
        <tr className="ticket">
            <td>{ticket.project}</td>
            <td>{ticket.ticket_id}</td>
            <td>{ticket.title}</td>
            <td>{ticket.creation_date}</td>
            <td><span className={`severity ${ticket.severity}`}>{ticket.severity}</span></td>
            <td>{
                ticket.assigned_to.map((assignee, idx) => {
                    return <span key={idx}>{assignee}, </span>
                })
            }</td>
            <td><div className={`status ${ticket.status}`}>{ticket.status}</div></td>
            <td>{ticket.days_open}</td>
            <td>{
                ticket.tags.map((tag, idx) => {
                    return <span key={idx}>{tag}, </span>
                })
            }</td>
        </tr>
    )
}