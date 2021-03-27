import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import pizzaImg from '../../assets/pizza-ketchup.jpg';

import './styles.css';

function Ketchup({ next, previous }) {
  return (
    <div>
      <header>
        <h4>Ketchup na pizza?</h4>
      </header>

      <div className='d-flex justify-content-between'>
        <div>
          <p>Nem pense nisso</p>

          <Form.Check type='radio' id='ketchup-true'>
            <Form.Check.Input type='radio' disabled />

            <Form.Check.Label>
              <span className='line-through'>Sim</span>
            </Form.Check.Label>
          </Form.Check>

          <Form.Check
            type='radio'
            label='Ew, não!'
            name='ketchup'
            id='ketchup-false'
            checked
          />
        </div>

        <img className='step-image' src={pizzaImg} alt='Ketchup' />
      </div>

      <hr className='mt-5' />

      <footer className='step-footer'>
        <Button variant='secondary' onClick={previous} size='sm'>
          Voltar
        </Button>

        <Button onClick={next} size='sm'>
          Finalizar
        </Button>
      </footer>
    </div>
  );
}

Ketchup.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default Ketchup;
