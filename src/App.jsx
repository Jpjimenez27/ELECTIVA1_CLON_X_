import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './routes/AppRouter';
import { PrimeReactProvider } from 'primereact/api';
const App = () => {
    return (
        <PrimeReactProvider>
            <BrowserRouter>
                <AppRouter />
            </BrowserRouter>
        </PrimeReactProvider>
    );

};
export default App;