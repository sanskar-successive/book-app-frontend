import React, { Suspense } from 'react'
import Router from './routes/Router'

const App = () => {
  return (
    <>
      <Suspense fallback={"loading"}>
        <Router />
      </Suspense>
    </>
  )
}

export default App
