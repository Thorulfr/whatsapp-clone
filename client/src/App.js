// Imports
import React from 'react';

// Component and hook imports
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
    // Set up a useState for our IDs using localStorage, passing in ID
    const [id, setId] = useLocalStorage('id');
    return (
        // If a user ID exists, send the user to the dashboard, passing in that ID; if not, send them to the login page and pass onIdSubmit to the Login component so that we can set our ID from the Login component
        id ? <Dashboard id={id} /> : <Login onIdSubmit={setId} />
    );
}

export default App;
