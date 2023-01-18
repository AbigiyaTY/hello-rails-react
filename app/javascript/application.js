// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import GreetingPage from './components/GreetingPage'
import store from './redux/store'

function App() {

    return ( 
        <div>
            <h1>Greeting page</h1>
            <Routes>
                <Route path = "/"
                element = { <GreetingPage/> }
                /> 
            </Routes>
        </div>
    );
}

ReactDOM.render( 
    <BrowserRouter>
        <Provider store={store} >
            <App />
        </Provider> 
    </BrowserRouter>,
    document.getElementById('root'),
);