import { Suspense, useContext, lazy } from 'react'
import { BrowserRouter as AppRouter, Route, Switch, Redirect } from 'react-router-dom'

import Login from '../views/Login'
import Register from '../views/Register'
import SellerDashboard from '../views/SellerDashboard'
import ProjectAgreementSeller from '../views/ProjectAgreementSeller'
import SearchJobsSeller from '../views/SearchJobsSeller'
import BuyerDashboard from '../views/BuyerDashboard'
import ProjectAgreementBuyer from '../views/ProjectAgreementBuyer'
import SearchJobsBuyer from '../views/SearchJobsBuyer'

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
                <Route exact path='/search-jobs/seller' >
                    <SearchJobsSeller/>
                </Route>

                {/* Buyer routes */}
                <Route exact path='/dashboard/buyer' >
                    <BuyerDashboard/>
                </Route>
                <Route exact path='/project-agreement/buyer' >
                    <ProjectAgreementBuyer/>
                </Route>
                <Route exact path='/search-jobs/buyer' >
                    <SearchJobsSeller/>
                </Route>

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
