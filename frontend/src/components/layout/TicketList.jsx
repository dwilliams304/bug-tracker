import Ticket from "../common/Ticket"


export default function TicketList(){
    return(
        <table className="tickets-table">
            <thead className="tickets-header">
                <td>ticket-id</td>
                <td>title</td>
                <td>creation-date</td>
                <td>severity</td>
                <td>assigned-to</td>
                <td>days-open</td>
                <td>Tags</td>
            </thead>

            <tbody className="tickets-list">
                <Ticket />
            </tbody>
        </table>
    )
}