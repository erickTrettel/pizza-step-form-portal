import ReactStepper from 'react-stepper-horizontal';
import PropTypes from 'prop-types';

function Stepper({ steps, currentStep }) {
  return (
    <ReactStepper
      steps={steps}
      activeStep={currentStep}
      activeColor='var(--red)'
      completeColor='var(--red)'
      activeTitleColor='var(--red)'
      completeTitleColor='var(--red)'
      completeBarColor='var(--red)'
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
