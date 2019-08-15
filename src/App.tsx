import React, { Suspense } from 'react'
import { Root, Routes } from 'react-static'
import { Switch, Route } from 'react-router-dom'

import './app.css'

const App: React.FC = () => (
  <Root>
    <div className="content">
      <Suspense fallback={<em>Loading...</em>}>
        <Switch>
          <Route render={() => <Routes path="*" />} />
        </Switch>
      </Suspense>
    </div>
  </Root>
)

export default App
