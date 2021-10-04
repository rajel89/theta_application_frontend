import { Link} from "react-router-dom";

const SellerDashboardLinks = () => {
    return (
        <div>
            <ul className="nav flex-column list-group">
                <li className="nav-item list-group-item">
                    <Link to="/dashboard/seller" className="nav-link"><i className="fas fa-vr-cardboard"></i> Dashboard</Link>
                </li>
                <li className="nav-item list-group-item">
                    <Link to="/seller/message/inbox" className="nav-link"><i className="far fa-envelope"></i> Messages</Link>
                </li>
                <li className="nav-item list-group-item">
                    <Link to="/seller/service-package/create" className="nav-link"><i className="fas fa-cubes"></i> Create Service Package</Link>
                </li>
                <li className="nav-item list-group-item">
                    <Link to="/seller/completed-projects" className="nav-link"><i className="fas fa-tasks"></i> Upload Completed Projects</Link>
                </li>
                <li className="nav-item list-group-item">
                    <Link to="/seller/profile" className="nav-link"><i className="fas fa-users-cog"></i> My Profile</Link>
                </li>
            </ul>
        </div>
    )
}

export default SellerDashboardLinks
