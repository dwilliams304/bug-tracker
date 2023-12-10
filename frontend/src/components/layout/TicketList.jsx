import Ticket from "../common/Ticket";
import '../../styles/page-styles/tickets.css';

export default function TicketList(){
    return(
        <div className="table-container">
            <table className="tickets-table">
                <thead className="tickets-header">
                    <tr>
                        <th>project</th>
                        <th>ticket-id</th>
                        <th>title</th>
                        <th>creation-date</th>
                        <th style={{textAlign: "center"}}>severity</th>
                        <th>assigned-to</th>
                        <th>days-open</th>
                        <th>Tags</th>
                    </tr>
                </thead>

                <tbody className="tickets-list">
                    <Ticket />
                    <Ticket />
                    <Ticket />
                </tbody>
            </table>
        </div>
    )
}