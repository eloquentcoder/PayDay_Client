import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

/*=== Import the App SCSS ===*/
import './App.scss';


/*==== Import AppStoreProvider HOC ====*/
import AppContextProvider from './contexts/AppContextProvider';
import ThemeContextProvider from './contexts/ThemeContextProvider';



/*====================================================================================================
*                               Components Imports.
* ===================================================================================================*/
import Home from './views/Home';
import Employee from './views/Employee';


function App() {
  return (
    <main className="App">
      <Router>
        <AppContextProvider>
          <ThemeContextProvider>

            <Routes>
              {/*======================== Landing Page =======================*/}
              <Route path="/" element={ <Navigate replace to="/dashboard" /> } />
              <Route path="/dashboard" element={ <Home /> } />

              {/*======================== Employee Page =======================*/}
              <Route path="/employee" element={ <Employee /> } />

            </Routes>
          </ThemeContextProvider>
        </AppContextProvider>
      </Router>


      {/*==== This is responsible for displaying Toast message on the screen ====*/}
      <ToastContainer />
    </main>
  );
}

export default App;
