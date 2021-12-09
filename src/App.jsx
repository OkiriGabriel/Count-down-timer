import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLoader from './components/helpers/MainLoader'
import Axios from 'axios';




    // context Apis

    // contexts

    // states

    // components: lazyload pages
    const Home = React.lazy(() => import ('./components/pages/Home') )


const App = () => {



    return (
        <>
         
          <Router>
            <Suspense fallback={MainLoader()}>
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </Suspense>
          </Router>
        </>
    )
}

export default App
