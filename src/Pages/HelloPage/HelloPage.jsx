import './HelloPage.css';
import React from 'react';
import Header from '../../CommonComponents/Header/Header'
import Footer from '../../CommonComponents/Footer/Footer'

export default function HelloPage() {

    const handleClick = () => {
        // window.location.href="/info-page";
        alert("Работает)")
    }    

    return(
        <>
            <Header />
            <div className="hello-page">
                <h2 className="hello-title">Привет!</h2>
                <button className="hello-button" onClick={handleClick}>
                    Нажми меня!
                </button>
                <img src="" alt="" />
            </div>
            <Footer />
        </>
    );
}