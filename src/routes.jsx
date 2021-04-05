import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Schemas from './pages/Schemas';
import Transactions from './pages/Transactions';
import Headers from './pages/Headers';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact>
                    <Schemas></Schemas>
                </Route>
                <Route path='/query/getSchema'>
                    <Schemas></Schemas>
                </Route>
                <Route path='/query/getTx'>
                    <Transactions></Transactions>
                </Route>
                <Route path='/query/getHeader'>
                    <Headers></Headers>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;