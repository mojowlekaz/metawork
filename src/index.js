import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,  createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Play from './Pages/Play';
import Train from './Pages/Train';
import Jobs from './Pages/Jobs';
import Arcade from './Pages/Arcade';
import Lottery from './Pages/Lottery';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
  path: "/home",
  element: <Home />
    },
    {
      path: "/play-to-earn",
      element: <Play />
        },
        {
          path: "/train-to-earn",
          element: <Train />
            },
            {
              path: "/jobs",
              element: <Jobs />
                },
                {
                  path: "/about",
                  element: <About />
                    },
                    {
                      path: "/arcade",
                      element: <Arcade/>
                        },
                        {
                          path: "/lottery",
                          element: <Lottery/>
                            },
  
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
