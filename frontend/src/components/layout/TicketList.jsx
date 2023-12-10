import Ticket from "../common/Ticket"


export default function TicketList(){
    return(
        <div className="tickets">
            <div className="tickets-header">
                <h2>ticket-id</h2>
                <h2>title</h2>
                <h2>creation-date</h2>
                <h2>severity</h2>
                <h2>assigned-to</h2>
                <h2>days-open</h2>
            </div>

            <div className="tickets-list">
                <Ticket />
            </div>
        </div>
    )
}