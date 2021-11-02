import React from 'react'
import Navbar from './Component/Navbar/Navbar'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Header from './Component/Header/Header'
import Navbarsec from './Component/NavbarSecond/Navbarsec'
import PostData from './Component/PostData/PostData'

const App = () => {
  return (
    <>
     <Navbar />
     <Header />
     <Navbarsec />
     <PostData />
    </>
  )
}

export default App;
