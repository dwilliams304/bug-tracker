import FilterMenu from "../layout/FilterMenu"
import TicketList from "../layout/TicketList"
import DummyData from "../../data/dummydata"

export default function BugTracker(){
    return(
        <div className="bug-page">
            <FilterMenu />
            <TicketList data={DummyData} />
        </div>
    )
}