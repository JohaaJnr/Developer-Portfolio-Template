import React from 'react'
import { Provider } from './components/Context'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Profile from './components/Profile'
import Portfolio from './components/Portfolio'
import Resume from './components/Resume'

function App() {
  return (
    <Provider>
    <Router>
    <React.Fragment>
      <div className='py-4 mx-auto'>
        <div className='row justify-content-center'>
        <Profile />
            <Routes>
            
                <Route exact path='/' element={<Home />} />
                <Route exact path='/About' element={<Home />} />
                <Route exact path='/Portfolio' element={<Portfolio />} />
                <Route exact path='/Resume' element={<Resume />} />
            </Routes>
        </div>
      </div>
     
    </React.Fragment>
    </Router>
    </Provider>
  );
}

export default App;
