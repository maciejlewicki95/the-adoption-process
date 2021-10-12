import React, { useEffect, useState } from "react";
import './test.css'

export const FirstStep = () => {

    const [hasKids, setHasKids] = useState(false);
    const [age, setAge] = useState(1);
    const [howManyKids, setHowManyKids] = useState(1);
    const [kids, setKids] = useState([]);
    const [errorAgeLessOrEqualToZero, setErrorAgeLessOrEqualToZero] = useState("");
    const [errorKidsLessOrEqualToZero, setErrorKidsLessOrEqualToZero] = useState("");
    const [gender, setGender] = useState("");

    function validateAgeOnChange(event) {
        console.log(hasKids);

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
            setErrorKidsLessOrEqualToZero('Zaznaczono wcześniej, że posiada Pan/i dzieci. Jeśli tak nie jest proszę zmienić odpowiedź powyżej z "tak" na "nie".');
            setHowManyKids(1);
        }
        else {
            setErrorKidsLessOrEqualToZero("")
            setHowManyKids(event.target.value);
        }
    }

    let hasGender = (gender == "male" || gender == "female")


    return (
        <>
            <div className="container">
                <h1>1. krok do adopcji</h1>
                <form id='form'>
                    <div className="input-choice">
                        <label htmlFor='gender_question'>Płeć:</label>
                        <div className="answers">
                            Kobieta
                            <input className='picking_input' name='gender_question' id='gender_question' type='radio' value="female" onChange={event => setGender(event.target.value)}/>
                            <br />
                            Mężczyzna
                            <input className='picking_input' name='gender_question' id='gender_question' type='radio' value="male" onChange={event => setGender(event.target.value)}/>
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
                            Tak
                            <input className='picking_input' name='children_question' id='children_question' type='radio' onChange={event => setHasKids(true)}/>
                            <br />
                            Nie
                            <input className='picking_input' name='children_question' id='children_question' type='radio' onChange={event => setHasKids(false)} />
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
                    <div className="input-group">
                        <label htmlFor='files'>Select files</label>
                        <input className='default' id='files' type="file" multiple />
                    </div>
                    <button className="submit-btn" type='submit'>Upload</button>
                </form>
            </div>

        </>
    )
}