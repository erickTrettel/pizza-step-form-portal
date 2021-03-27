import { useCallback } from 'react';
import { Button } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { clear as clearPizza } from '../../store/pizza';
import { setStep } from '../../store/stepper';
import Summary from '../Summary';

import pizzaImg from '../../assets/pizza-done.jpg';

export default function Confirmation() {
  const dispatch = useDispatch();
  const pizza = useSelector((state) => state.pizza);

  const reset = useCallback(() => {
    dispatch([setStep(0), clearPizza()]);
  }, [dispatch]);

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div>
          <p>Aqui está a sua pizza</p>

          <Summary pizza={pizza} />
        </div>

        <img className='step-image' src={pizzaImg} alt='Finalizado' />
      </div>

      <hr className='mt-5' />

      <footer className='step-footer'>
        <Button onClick={reset} size='sm'>
          Quero começar de novo
        </Button>
      </footer>
    </div>
  );
}
