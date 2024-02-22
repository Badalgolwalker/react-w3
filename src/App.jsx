import React from 'react'
import Banner from './component/banner'
import Header from './component/header'
import Laptop from './component/laptop'
import Newslater from './component/newslater'
import Plans from './component/plans'


const App = () => {
  return (
    <div>
         <Header />
      <Banner />
      <Laptop />
      <Newslater />
      <Plans />
    </div>
  )
}

export default App