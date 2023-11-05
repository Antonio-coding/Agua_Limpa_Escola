import 'core-js/stable'
import React from 'react'
import 'regenerator-runtime/runtime'

import { HashRouter as Router, Switch, Route } from 'react-router-dom'



const Main = React.lazy(() => import('./main/index'))




const App = () => {
  return (
    <React.Suspense fallback={<Loader />}>
      <Router>
        <Switch>
         <Route />
        
        </Switch>
      </Router>
      <GlobalStyle />
    </React.Suspense>
  )
}

export default App