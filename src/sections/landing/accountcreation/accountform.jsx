import React, { useState } from 'react';

import Step1 from './step1';
import Step2 from './step2';
import Step3 from './step3';
import Step4 from './step4';
import Step5 from './step5';
import Step6 from './step6';
import Step7 from './step7';

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // Modify this function to accept the number of steps to skip (defaults to 1 step forward)
  const handleNextStep = (stepsToSkip = 1) => {
    setCurrentStep((prevStep) => prevStep + stepsToSkip);
  };

  const handleBackStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1)); // Ensure it does not go below step 1
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 onNext={handleNextStep} />;
      case 2:
        return <Step2 onNext={handleNextStep} onBack={handleBackStep} />;
      case 3:
        return <Step3 onNext={handleNextStep} onBack={handleBackStep} />;
      case 4:
        // Updated: Pass the modified onNext with the ability to skip steps
        return <Step4 onNext={handleNextStep} onBack={handleBackStep} />;
      case 5:
        return <Step5 onNext={handleNextStep} onBack={handleBackStep} />;
      case 6:
        return <Step6 onNext={handleNextStep} onBack={handleBackStep} />;
      case 7:
        return <Step7 onBack={handleBackStep} />;
      default:
        return <Step1 onNext={handleNextStep} />;
    }
  };

  return <div>{renderStep()}</div>;
};

export default MultiStepForm;
