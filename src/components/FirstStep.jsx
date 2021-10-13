import React, { useEffect, useState } from "react";
import './test.css'

export const FirstStep = () => {

    const [hasKids, setHasKids] = useState(null);
    const [age, setAge] = useState(1);
    const [howManyKids, setHowManyKids] = useState(null);
    const [ageOfYoungestKid, setAgeOfYoungestKid] = useState(null);
    const [kids, setKids] = useState([]);
    const [errorAgeLessOrEqualToZero, setErrorAgeLessOrEqualToZero] = useState("");
    const [errorKidsLessOrEqualToZero, setErrorKidsLessOrEqualToZero] = useState("");
    const [errorCustomHouseType, setErrorCustomHouseType] = useState("");
    const [errorSetFlatFloor, setErrorSetFlatFloor] = useState("");
    const [gender, setGender] = useState("");
    const [houseType, setHouseType] = useState("");
    const [customHouseType, setCustomHouseType] = useState("");
    const [flatFloor, setFlatFloor] = useState(null);
    const [images, setImages] = useState([]);
    const [noImage, setNoImage] = useState(true);

    useEffect(() => {
        document.getElementById("children_question_no").addEventListener("change", function() {setErrorKidsLessOrEqualToZero("");});
        return () => {
            document.getElementById("children_question_no").addEventListener("change", function() {setErrorKidsLessOrEqualToZero("");});
        }
    }, []);
    
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
        if (event.target.value == 0){
            setHowManyKids(event.target.value)
            setErrorKidsLessOrEqualToZero('Zaznaczono wcześniej, że posiada Pan/i dzieci. Proszę wskazać poprawną liczbę lub zmienić odpowiedź powyżej z "tak" na "nie".')
        }
        else if (event.target.value == "" || isInt(event.target.value)){
            setHowManyKids(event.target.value);
            setErrorKidsLessOrEqualToZero("");
        }
        else {
            setErrorKidsLessOrEqualToZero("Możesz wprowadzić tylko wartości całkowite większe niż 0!")
        }
    }

    function enableCustomAnswer() {
        let customAnswer = document.getElementById("custom_answer_for_house_type");
        customAnswer.disabled = false;
    }

    function disableCustomAnswer() {
        let customAnswer = document.getElementById("custom_answer_for_house_type");
        customAnswer.disabled = true;
    }

    function isValidCharacter(event) {
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

    function changeHouseType(houseType) {
        disableCustomAnswer();
        setCustomHouseType("");
        setHouseType(houseType);
    }

    const imageHandler = event => {
        images.length = 0;
        let copyImageTable = images;
        if (event.target.files.length > 0){
            setNoImage(false);
            for (let i=0; i < event.target.files.length; i++){
                let file = event.target.files[i];
                copyImageTable.push(file)
                console.log(file);
            }
            setImages(copyImageTable);
        }
        else {
            setNoImage(true);
        }
        console.log(images)
        // console.log(URL.createObjectURL(file));
    };

    function handleHasChildren(event){
        setHasKids(true);
        document.getElementById("count_of_kids_container").style.display = "inline";
    }

    function handleDontHaveChildren(event){
        setHasKids(false);
        document.getElementById("count_of_kids_container").style.display = "none";
    }

    function validateSetFloor(event){
        if (event.target.value == "" || isInt(event.target.value)){
            setFlatFloor(event.target.value);
            setErrorSetFlatFloor("");
        }
        else{
            setErrorSetFlatFloor("Możesz wprowadzić tylko wartości całkowite większe lub równe 0!")
        }
    }

    function isInt(value) {
        return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
      }

    let hasGender = (gender == "male" || gender == "female")
    let noErrors = (errorAgeLessOrEqualToZero == "" && errorKidsLessOrEqualToZero == "" && errorSetFlatFloor == "")
    let allQuestionsHaveAnswer = (gender != "" && houseType != "" && hasKids != null)


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
                            <input className='picking_input' name='children_question' id='children_question_yes' type='radio' onChange={event => handleHasChildren(event)} />
                            Tak
                            <br />
                            <input className='picking_input' name='children_question' id='children_question_no' type='radio' onChange={event => handleDontHaveChildren(event)} />
                            Nie
                        </div>
                    </div>
                    <div className="input-group" id="count_of_kids_container" style={{display: "none"}}>
                        <label htmlFor="count_of_kids">Proszę wskazać ilość dzieci:</label>
                        <input className='default' name='count_of_kids' id='count_of_kids' type="number" min="0" step="1" value={howManyKids} onChange={event => validateCountOfKids(event)} />
                    </div>
                    {errorKidsLessOrEqualToZero != "" && (
                        <div className="error">
                            {errorKidsLessOrEqualToZero}
                            </div>
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
                            <input type='text' id="custom_answer_for_house_type" style={{ height: "21px", width: "20vw" }} disabled placeholder="inne..." value={customHouseType} onChange={event => isValidCharacter(event)} />
                        </div>
                    </div>
                    {houseType == "flat" && (
                        <>
                            <div className="input-group">
                                <label htmlFor="flat_floor">Proszę wskazać piętro na którym znajduje się mieszkanie (parter=0):</label>
                                <input className='default' name='flat_floor' id='flat_floor' type="number" min="0" step="1" value={flatFloor} onChange={event => validateSetFloor(event)} />
                            </div>
                            {errorSetFlatFloor != "" && (
                                <div className="error">
                                {errorSetFlatFloor}
                                </div>
                            )}
                        </>
                    )}
                    {errorCustomHouseType != "" && (
                        <div className="error">
                            {errorCustomHouseType}
                        </div>
                    )}
                    <div className="input-group">
                        <label htmlFor='files'>Dodaj zdjęcia mieszkania:</label>
                        <input className='inputfile' id='files' type="file" multiple onChange={imageHandler} />
                    </div>
                    {noImage && (
                        <div className="error">Nie wybrano zdjęcia!
                        </div>
                    )}
                {noErrors && allQuestionsHaveAnswer && !noImage &&
                    (<button className="submit-btn" type='submit' id="submit_button_enabled">Prześlij dane</button>)}
                {(!noErrors || !allQuestionsHaveAnswer || noImage) &&
                    (<button className="submit-btn" type='submit' id="submit_button_disabled" title="Nie możesz przesłać danych, ponieważ formularz zawiera błędy lub niektóre pytania nie mają odpowiedzi" disabled >Prześlij dane
                    </button>)}
                {(!allQuestionsHaveAnswer && noImage) &&
                    (<div className="error">Nie możesz przesłać danych, ponieważ formularz zawiera pytania bez odpowiedzi lub nie wybrano zdjęcia!</div>)}
                {!noErrors &&
                    (<div className="error">Nie możesz przesłać danych, ponieważ formularz zawiera błędy!</div>)}
                </form>

            </div>

        </>
    )
}