import FilterMenu from "../layout/FilterMenu"
import TicketList from "../layout/TicketList"

export default function BugTracker(){
    return(
        <div className="bug-page">
            <FilterMenu />
            <TicketList />
        </div>
    )
}