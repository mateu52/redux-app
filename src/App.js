import React from "react";
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './components/reducer';
import rootReducer from "./rootReducer";
import thunk from 'redux-thunk';

import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import Home from './components/Pages/Home';
import Users from './components/Pages/Users/Containers/Users';
import Form from './components/Pages/Form/Form';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: '/users',
        element: <Users />
      },
      {
        path: '/form',
        element: <Form />
      }
    ]
  }
])

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleware = [thunk];
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware)));


function App() {
  return (
    <div>
      <Provider store={store}>
        <RouterProvider router={router}>
          
        </RouterProvider>
      </Provider>
    </div>
  );
}

export default App;
