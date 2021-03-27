import ReactStepper from 'react-stepper-horizontal';
import PropTypes from 'prop-types';

function Stepper({ steps, currentStep }) {
  return (
    <ReactStepper
      steps={steps}
      activeStep={currentStep}
      activeColor='var(--dark-blue)'
      completeColor='var(--dark-blue)'
      activeTitleColor='var(--dark-blue)'
      completeTitleColor='var(--dark-blue)'
      completeBarColor='var(--dark-blue)'
      barStyle='solid'
    />
  );
}

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentStep: PropTypes.number.isRequired,
};

export default Stepper;
