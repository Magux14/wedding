import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { WeddingPage } from './pages/wedding/WeddingPage';

export const App = () => {

    return (
        <BrowserRouter basename={import.meta.env.VITE_PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<WeddingPage />} />
            </Routes>
        </BrowserRouter>
    )
}
