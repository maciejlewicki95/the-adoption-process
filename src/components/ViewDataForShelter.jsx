import React, { useEffect, useState } from "react";
// import './displayImages.css'
import './style.css'
// const Lightbox = require('react-awesome-lightbox'); 



export const ViewDataForShelter = () => {

    const [appState, setAppState] = useState(null)
    // const images = [{src: 'http://localhost:8080/images/foto1.jpg'}, 
    //     {src: 'http://localhost:8080/images/foto2.jpg'},
    //     {src: 'http://localhost:8080/images/foto3.jpg'},
    //     {src: 'http://localhost:8080/images/samochodzikipiesek.jpg'}]


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
            <div className="container">
                {appState != null && (<><div>{appState.id}</div><div>{appState.has_kids}</div>
                    <div>{appState.gender}</div>
                    <div>{images.length}</div></>)}
                <div>
                    <div className="gallery">
                        {images.map(image => {
                            return (
                                <a href={image} data-lightbox="test"> <img src={image} /></a>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}