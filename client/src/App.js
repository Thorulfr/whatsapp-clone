// Imports
import React from 'react';

// Component and hook imports
import Login from './components/Login';
import useLocalStorage from './hooks/useLocalStorage';

function App() {
    // Set up a useState for our IDs using localStorage, passing in ID
    const [id, setId] = useLocalStorage('id');
    return (
        <>
            {/* Print out whatever we set our ID state to be */}
            {id}
            {/* We're passing onIdSubmit to the Login component so that we can set our ID from the Login component */}
            <Login onIdSubmit={setId} />;
        </>
    );
}

export default App;
