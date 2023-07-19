// import logo from './logo.svg';
// import { useSelector } from 'react-redux';
import "./App.css";
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import LazyLoader from "./components/utils/LazyLoader";

const HomePage = lazy(() => import('./pages/home'));
const Staycation = lazy(() => import('./pages/staycation'));
const TheSlope = lazy(() => import('./pages/TheSlope'));
const Packages = lazy(() => import('./pages/packages'));
const BlogMain = lazy(() => import('./pages/BlogMain'));
const Activities = lazy(() => import('./pages/activities'));
// const SignIn = lazy(() => import('./pages/SignIn'));

function App() {
  // const header = useSelector(state => state.header.visible);
  // const isHomePage = window.location.pathname === '/' || window.location.pathname === '/home' || window.location.pathname === '/index';

  return (
    <div className="App">
      {/* <ResponsiveAppBar /> */}

      <div className="flex-body">
        <Router>
        <Suspense
              fallback={
                <>
                  <LazyLoader />
                </>
              }
            >
          <Routes>
          
            <Route exact path="/" element={<HomePage />} />
            
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/index" element={<HomePage />} />
            <Route exact path="/staycation" element={<Staycation />} />
            <Route exact path="/the-slope" element={<TheSlope />} />
            <Route exact path="/packages" element={<Packages />} />
            <Route exact path="/activities" element={<Activities />} />
            <Route exact path="/blog" element={<BlogMain />} />
            
          </Routes>
          </Suspense>
        </Router>
      </div>
    </div>
  );
}

export default App;
