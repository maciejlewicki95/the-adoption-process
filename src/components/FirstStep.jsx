import React, { useEffect, useState } from "react";
import './test.css'

export const FirstStep = () => {

    const [hasKids, setHasKids] = useState(false);
    const [age, setAge] = useState(1);
    const [howManyKids, setHowManyKids] = useState(1);
    const [kids, setKids] = useState([]);
    const [errorAgeLessOrEqualToZero, setErrorAgeLessOrEqualToZero] = useState("");
    const [errorKidsLessOrEqualToZero, setErrorKidsLessOrEqualToZero] = useState("");
    const [errorCustomHouseType, setErrorCustomHouseType] = useState("");
    const [gender, setGender] = useState("");
    const [houseType, setHouseType] = useState("");
    const [customHouseType, setCustomHouseType] = useState("");

    function validateAgeOnChange(event) {
        if (event.target.value == "") {
            setAge(event.target.value);
        }
        else if (event.target.value <= 0) {
            setErrorAgeLessOrEqualToZero("Podany wiek musi być większy od 0!");
            setAge(1);
        }
        else {
            setErrorAgeLessOrEqualToZero("");
            setAge(event.target.value);
        }
    }

    function validateCountOfKids(event) {
        if (event.target.value == "") {
            setHowManyKids(event.target.value);
        }
        else if (event.target.value <= 0) {
            setErrorKidsLessOrEqualToZero('Zaznaczono wcześniej, że posiada Pan/i dzieci. Proszę wskazać poprawną liczbę lub zmienić odpowiedź powyżej z "tak" na "nie".');
            setHowManyKids(1);
        }
        else {
            setErrorKidsLessOrEqualToZero("")
            setHowManyKids(event.target.value);
        }
    }

    function enableCustomAnswer(){
        let customAnswer = document.getElementById("custom_answer_for_house_type");
        customAnswer.disabled = false;
    }

    function disableCustomAnswer(){
        let customAnswer = document.getElementById("custom_answer_for_house_type");
        customAnswer.disabled = true;
    }

    function isValidCharacter(event){
        var index = event.target.value.length - 1
        console.log(index);
        console.log(event.target.value.charCodeAt(index));
        if ((event.target.value.charCodeAt(index) >= 65 && event.target.value.charCodeAt(index) <= 90) || 
        (event.target.value.charCodeAt(index) >= 97 && event.target.value.charCodeAt(index) <= 122) || 
        (event.target.value.charCodeAt(index) == 32) || 
        (event.target.value.charCodeAt(index) >= 44 && event.target.value.charCodeAt(index) <= 46) || 
        (event.target.value.length <= 0)) {
            setErrorCustomHouseType("");
            setCustomHouseType(event.target.value);
            setHouseType(event.target.value);
        }
        else {
            setErrorCustomHouseType('Możesz używać tylko małych i wielkich liter, spacji oraz znaków "." "," "-"')
        }
    }

    function changeHouseType(houseType){
        disableCustomAnswer();
        setCustomHouseType("");
        setHouseType(houseType);
    }

    let hasGender = (gender == "male" || gender == "female")


    return (
        <>
            <div className="container">
                <h1>1. krok do adopcji</h1>
                <h2>Pytania metryczkowe</h2>
                <form id='form' encType="multipart/form-data" method="POST">
                    <div className="input-choice">
                        <label htmlFor='gender_question'>Płeć:</label>
                        <div className="answers">
                            <input className='picking_input' name='gender_question' id='gender_question' type='radio' value="female" onChange={event => setGender(event.target.value)} />
                            Kobieta
                            <br />
                            <input className='picking_input' name='gender_question' id='gender_question' type='radio' value="male" onChange={event => setGender(event.target.value)} />
                            Mężczyzna
                        </div>
                    </div>
                    <div className="input-group">
                        <label htmlFor='age'>Wiek:</label>
                        <input className='default' name='age' id='age' type="number" value={age} onChange={event => validateAgeOnChange(event)} />
                    </div>
                    {errorAgeLessOrEqualToZero != "" && (
                        <div className="error">
                            {errorAgeLessOrEqualToZero}
                        </div>
                    )}
                    <div className="input-choice">
                        <label htmlFor='children_question'>
                            {!hasGender && (<span>Czy ma Pan/i dzieci?</span>)}
                            {gender == "female" && (<span>Czy ma Pani dzieci?</span>)}
                            {gender == "male" && (<span>Czy ma Pan dzieci?</span>)}
                        </label>
                        <div className="answers">
                            <input className='picking_input' name='children_question' id='children_question' type='radio' onChange={event => setHasKids(true)} />
                            Tak
                            <br />
                            <input className='picking_input' name='children_question' id='children_question' type='radio' onChange={event => setHasKids(false)} />
                            Nie
                        </div>
                    </div>
                    {hasKids && (
                        <><div className="input-group">
                            <label htmlFor="count_of_kids">Proszę wskazać ilość dzieci:</label>
                            <input className='default' name='count_of_kids' id='count_of_kids' type="number" value={howManyKids} onChange={event => validateCountOfKids(event)} />
                        </div>
                            {errorKidsLessOrEqualToZero != "" && (
                                <div className="error">
                                    {errorKidsLessOrEqualToZero}
                                </div>
                            )}
                        </>
                    )}
                    <h2>Informacje o mieszkaniu</h2>
                    <div className="input-choice">
                        <label htmlFor='house_type_question'>Typ mieszkania:</label>
                        <div className="answers">
                            <input className='picking_input' name='house_type_question' id='house_type_question' type='radio' value="flat" onChange={event => changeHouseType(event.target.value)} />
                            Mieszkanie
                            <br />
                            <input className='picking_input' name='house_type_question' id='house_type_question' type='radio' value="single family house" onChange={event => changeHouseType(event.target.value)} />
                            Dom jednorodzinny
                            <br />
                            <input className='picking_input' name='house_type_question' id='house_type_question' type='radio' onChange={event => enableCustomAnswer()} />
                            <input type='text' id="custom_answer_for_house_type" style={{height: "21px", width: "20vw"}} disabled placeholder="inne..." value={customHouseType} onChange={event => isValidCharacter(event)} />
                        </div>
                    </div>
                    {errorCustomHouseType != "" && (
                        <div className="error">
                            {errorCustomHouseType}
                        </div>
                    )}
                    <div className="input-group">
                        <label htmlFor='files'>Dodaj zdjęcia mieszkania:</label>
                        <input className='inputfile' id='files' type="file" multiple data-multiple-caption="{count} files selected" />
                    </div>
                    <button className="submit-btn" type='submit'>Prześlij dane</button>
                </form>
                
            </div>

        </>
    )
}