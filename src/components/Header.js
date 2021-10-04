import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import  { useHistory  } from 'react-router-dom'

const Header = ({title, isSearch, showtitle}) => {

    const user = JSON.parse(localStorage.getItem('userDetails'));
    let userDasboard = user.userDetails.accountType == "seller" ? "/dashboard/seller" : "/dashboard/buyer";
    let jobsSearch = user.userDetails.accountType == "seller" ? "/search-jobs" : "/my-job-posting";
    const history = useHistory();

    const logoutUser = (e) => {
        e.preventDefault();
        localStorage.removeItem('userDetails');
        localStorage.removeItem('newAccount');
        history.push('/login');
    }

    return (
        <header className="header-blue">
            <nav className="navbar navbar-dark navbar-expand-md navigation-clean-search">
                <div className="container-fluid"><a className="navbar-brand" href="/#">Theta</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <div className="collapse navbar-collapse" id="navcol-1">
                        <ul className="navbar-nav ms-auto">
                            <Link to={userDasboard} className="nav-link">Dashboard</Link>
                            <Link to={jobsSearch} className="nav-link">Search Jobs</Link>
                            <li className="nav-item"><a className="nav-link" href="/#" onClick={logoutUser}>Log out</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="container">
                <div className="row">
                    {showtitle &&
                        <div className="col-md-12">
                            <h1 className="text-center text-white">{title}</h1>
                        </div>
                    }
                    {isSearch &&
                        <div className="col-md-12 pt-5">
                            <form style={{width: '70%', margin: '0 auto'}}><input className="form-control form-control-lg" type="search" placeholder="Search job" /></form>
                        </div>
                    }
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    title: 'Theta',
    showtitle: true,
    isSearch: false
}

Header.propTypes = {
    title: PropTypes.string,
    showtitle: PropTypes.bool,
    isSearch: PropTypes.bool,
}

export default Header
