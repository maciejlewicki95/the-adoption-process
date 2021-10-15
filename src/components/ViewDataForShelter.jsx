import React, { useEffect, useState } from "react";
// import './displayImages.css'

export const ViewDataForShelter = () => {

    const [appState, setAppState] = useState(null)
    const [images, setImages] = useState(['http://localhost:8080/images/foto1.jpg', 
    'http://localhost:8080/images/foto2.jpg', 
    'http://localhost:8080/images/foto3.jpg', 
    'http://localhost:8080/images/samochodzikipiesek.jpg'])

    useEffect(() => {
        const url = 'http://localhost:8080/application-data/7';
        fetch(url)
            .then(data => data.json())
            .then(response => setAppState(response));
    })

    return (
        <>
            <div>jestem tutaj</div>
            {appState != null && (<><div>{appState.id}</div><div>{appState.has_kids}</div>
            <div>{appState.gender}</div>
            <div>{images.length}</div></>)}
            {images.map(image => {
                return (
                    <div id="img-holder">
                    <span id="mask" tabindex="1"></span>
                    <img id="pic" src={image} tabindex="2"/>
                    </div>
                )
            })}
            
        </>
    )
}