import { BrowserRouter as AppRouter, Route, Switch } from 'react-router-dom'

import Login from '../views/Login'
import Register from '../views/Register'
import SellerDashboard from '../views/SellerDashboard'
import ProjectAgreementSeller from '../views/ProjectAgreementSeller'
import SearchJobsSeller from '../views/SearchJobsSeller'
import BuyerDashboard from '../views/BuyerDashboard'
import ProjectAgreementBuyer from '../views/ProjectAgreementBuyer'
import SearchJobsBuyer from '../views/SearchJobsBuyer'
import SellerProfile from '../views/SellerProfile'
import SellerCreateServicePackage from '../views/SellerCreateServicePackage'
import SellerEditServicePackage from '../views/SellerEditServicePackage'
import SellerCompletedProjects from '../views/SellerCompletedProjects'
import BuyerCreateJobPost from '../views/BuyerCreateJobPost'
import BuyerEditJobPost from '../views/BuyerEditJobPost'
import BuyerViewFreelancersProfile from '../views/BuyerViewFreelancersProfile'
import BuyerHiredFreelancer from '../views/BuyerHiredFreelancer'
import BuyerMessageInbox from '../views/BuyerMessageInbox'
import SellerMessageInbox from '../views/SellerMessageInbox'

const Router = () => {
    return (
        <AppRouter>
            <Switch>
                {/* Seller routes */}
                <Route exact path='/dashboard/seller' >
                    <SellerDashboard/>
                </Route>
                <Route exact path='/project-agreement/seller' >
                    <ProjectAgreementSeller/>
                </Route>
                <Route exact path='/search-jobs' >
                    <SearchJobsSeller/>
                </Route>
                <Route exact path='/seller/profile' >
                    <SellerProfile/>
                </Route>
                <Route exact path='/seller/service-package/create' >
                    <SellerCreateServicePackage/>
                </Route>
                <Route exact path='/seller/service-package/update/:id' >
                    <SellerEditServicePackage/>
                </Route>
                <Route exact path='/seller/completed-projects' >
                    <SellerCompletedProjects/>
                </Route>
                <Route exact path='/seller/message/inbox' >
                    <SellerMessageInbox/>
                </Route>

                {/* Buyer routes */}
                <Route exact path='/dashboard/buyer' >
                    <BuyerDashboard/>
                </Route>
                <Route exact path='/jobs/create' >
                    <BuyerCreateJobPost/>
                </Route>
                <Route exact path='/jobs/:id/update' >
                    <BuyerEditJobPost/>
                </Route>

                <Route exact path='/project-agreement/buyer' >
                    <ProjectAgreementBuyer/>
                </Route>
                <Route exact path='/my-job-posting' >
                    <SearchJobsBuyer/>
                </Route>
                <Route exact path='/buyer/view/freelancers-profile/:id' >
                    <BuyerViewFreelancersProfile/>
                </Route>
                <Route exact path='/buyer/hired/freelancers' >
                    <BuyerHiredFreelancer/>
                </Route>
                <Route exact path='/buyer/message/inbox' >
                    <BuyerMessageInbox/>
                </Route>
                
                {/* Authentication  */}
                <Route exact path='/login' >
                    <Login/>
                </Route>
                <Route exact path='/register' >
                    <Register/>
                </Route>
                <Route exact path='/'>
                    <Login/>
                </Route>
            </Switch>
        </AppRouter>
    )
}

export default Router
