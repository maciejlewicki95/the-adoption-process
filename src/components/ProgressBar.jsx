import React from "react";
import StepProgressBar from "react-step-progress";
// import the stylesheet
// import "react-step-progress/dist/index.css";
import './progressBar.css'

export default function ProgressBar(props) {
 

  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    return true;
  }

  function step3Validator() {
    // return a boolean
  }
  return (
    <div className="ProgressBar">
      <StepProgressBar
        startingStep={props.step}
        steps={[
          {
            label: "Wybór zwierzęcia",
            name: "Wybór zwierzęcia",
          },
          {
            label: "Weryfikacja adoptującego",
            name: "Weryfikacja adoptującego",
          },
          {
            label: "Zaplanuj wizytę",
            name: "Zaplanuj wizytę",
            validator: step2Validator
          },
          {
            label: "Adopcja!",
            name: "Adopcja!",
          }
        ]}
      />
    </div>
  );
}