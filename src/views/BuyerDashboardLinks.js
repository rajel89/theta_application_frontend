import { Link} from "react-router-dom";
const BuyerDashboardLinks = () => {
    return (
        <>
            <ul className="nav flex-column list-group">
                <li className="nav-item list-group-item">
                    <Link to="/dashboard/buyer" className="nav-link"><i className="fas fa-vr-cardboard"></i> Dashboard</Link>
                </li>
                <li className="nav-item list-group-item">
                    <Link to="/buyer/message/inbox" className="nav-link"><i className="far fa-envelope"></i> Messages</Link>
                </li>
                <li className="nav-item list-group-item">
                    <Link to="/jobs/create" className="nav-link"><i className="fas fa-thumbtack"></i> Post New Job</Link>
                </li>
                <li className="nav-item list-group-item">
                    <Link to="/buyer/hired/freelancers" className="nav-link"><i className="fas fa-chalkboard-teacher"></i> Hired Freelancers</Link>
                </li>
            </ul>
        </>
    )
}

export default BuyerDashboardLinks
