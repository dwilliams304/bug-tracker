import Ticket from "../common/Ticket";
import '../../styles/page-styles/tickets.css';

export default function TicketList(props){
    const {data} = props;

    return(
        <div className="table-container">
            <table className="tickets-table">
                <thead className="tickets-header">
                    <tr>
                        <th>project</th>
                        <th>ticket-id</th>
                        <th>title</th>
                        <th>creation-date</th>
                        <th>severity</th>
                        <th>assigned-to</th>
                        <th>status</th>
                        <th>days-open</th>
                        <th>Tags</th>
                    </tr>
                </thead>

                <tbody className="tickets-list">
                    {
                        data.map((ticket, idx) => {
                            return <Ticket key={idx} ticket={ticket} />
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}