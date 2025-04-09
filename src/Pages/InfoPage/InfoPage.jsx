import './InfoPage.css';
import React from 'react';
import Header from '../../CommonComponents/Header/Header';
import Footer from '../../CommonComponents/Footer/Footer'

export default function InfoPage() {
    return(
        <>
            <Header />
            <div className="info-page">
                <h1 clssName="info-title">Этот сайт был запущен через GitHub Pages!</h1>
            </div>
            <Footer />
        </>
    );
}