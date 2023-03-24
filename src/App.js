import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer'
import Home from './components/pages/Home'
import SignUp from './components/pages/SignUp'
import Album from './components/pages/Album'
import Tour from './components/pages/Tour'

function App() {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Album' element={<Album />} /> 
          <Route path='/Tour' element={<Tour />} /> 
          <Route path='/SignUp' element={<SignUp />} />
        </Routes>
        <Footer />
    </>
  );
}

export default App;







// Test Case Assuptions 

// Case 1: Responsive Navbar ;

// Description: Navbar should remove links and turn into responsive hamburger menu icon once screen size is reduced.

// Goal: Navbar changes when screen in minimised and reduced. Hamburger menu opens up a drop menu.

// Test Steps: Minimize screen, reduce screen size. Click Hamburger icon to open drop menu. Click on drop menu link. 

// Expected result: Hamburger menu icon appears, clicking icon opens drop menu. Clicking menu link takes user to appropriate page.

//Actual result: As Expected.

//Result: PASS




// Case 2: Card Links Work ;

// Description: Clicking on any card links on the home page should take user to appropriate page.

// Goal: Scrolling down and clicking on one of the menu cards on the main page takes user to appropriate page.

// Test Steps: Click on card link. Return to home page, try every link. 

// Expected result: Every card once clicked takes user to appropriate page. 

//Actual result: As Expected.

//Result: PASS

