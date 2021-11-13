import React, { useEffect, useState } from "react";
import './style.css'



export const ViewDataForShelter = () => {

    // const [appState, setAppState] = useState(null)
    const [appState, setAppState] = useState({age: 15, gender: "male", howManyKids: 0, houseType: "flat", flatFloor: 7, houseArea: 77})


    const [images, setImages] = useState(['http://localhost:8080/images/foto1.jpg',
        'http://localhost:8080/images/foto2.jpg',
        'http://localhost:8080/images/foto3.jpg',
        'http://localhost:8080/images/samochodzikipiesek.jpg'])


    // useEffect(() => {

    //     const url = 'http://localhost:8080/application-data/7';
    //     fetch(url)
    //         .then(data => data.json())
    //         .then(response => {
    //             if (response.status != 500){
    //             setAppState(response)}});
    // })

    function ageConverter(ageInMonths){
        let months = ageInMonths % 12
        let years = (ageInMonths - months) / 12
        let correctFormForMonths = correctMonthEnding(months)
        let correctFormForYears = correctYearEnding(years)
        if (years <= 0) {
            return `${months} ${correctFormForMonths}`
        }
        else {
            return `${years} ${correctFormForYears} i ${months} ${correctFormForMonths}`
        }
    }

    function correctMonthEnding(ageInMonths){
        if (ageInMonths == 1) return "miesiąc"
        else if (ageInMonths == 0 || ageInMonths > 4) return "miesięcy"
        else return "miesiące"
    }

    function correctYearEnding(ageInYears){
        if (ageInYears == 1) return "rok"
        else if (ageInYears > 4) return "lat"
        else return "lata"
    }

    return (
        <>
            <div className="container">
                
                {appState != null ? (<><h1>Dane o osobie składającej wniosek</h1>
                    <div className="data-container">
                    <div className="data-container-element"><span>Wiek: </span>{appState.age}</div>
                    <div className="data-container-element"><span>Płeć: </span>{appState.gender == "male" && ("mężczyzna")} {appState.gender == "female" && ("kobieta")}</div>
                    <div className="data-container-element"><span>Liczba dzieci: </span>{appState.howManyKids}</div>
                    {appState.howManyKids > 0 && (<div className="data-container-element"><span>Wiek najmłodszego dziecka: </span>{ageConverter(appState.ageOfYoungestKid)}</div>
                                        )}
                    </div>
                    <h1>Dane o miejscu zamieszkania</h1>
                    <div className="data-container">
                    <div className="data-container-element"><span>Typ: </span>
                        {appState.houseType == "single family house" && ("dom jednorodzinny")}
                        {appState.houseType == "flat" && ("mieszkanie")}
                        {appState.houseType != "single family house" && appState.houseType != "flat" && (appState.houseType)}
                    </div>
                    {appState.houseType == "flat" && (<div className="data-container-element"><span>Piętro: </span>{appState.flatFloor}</div>)}
                    <div className="data-container-element"><span>Powierzchnia: </span><span>{appState.houseArea}m<sup>2</sup></span></div>
                    </div>
                    <h1>Załączone zdjęcia</h1>
                    <div className="gallery">
                    {images.map(image => {
                        return (
                            <div className="single-image">
                                <a href={image} target="_blank"><img src={image} /></a>
                            </div>
                        )
                    })}
                </div>
                    </>) : (<><br /><br /><br /><br /><div>WYSTĄPIŁ BŁĄD I NIE UDAŁO SIĘ ZAŁADOWAĆ DANYCH</div><br /><br /><br /><br /></>)}

            </div>

        </>
    )
}