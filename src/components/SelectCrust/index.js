import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { fetchCrusts, clear } from '../../store/crust';
import { setCrust } from '../../store/pizza';

function SelectCrust({ next, previous }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.crust.loading);
  const crusts = useSelector((state) => state.crust.data);
  const error = useSelector((state) => state.crust.error);

  const selectedCrust = useSelector((state) => state.pizza.crust);

  useEffect(() => {
    dispatch(fetchCrusts());

    return () => dispatch(clear());
  }, [dispatch]);

  const handleSelectCrust = useCallback((item) => dispatch(setCrust(item)), [
    dispatch,
  ]);

  const handleGoToNextStep = useCallback(() => {
    if (!selectedCrust) {
      toast.warning('Você deve selecionar a borda primeiro');
    } else {
      next();
    }
  }, [selectedCrust, next]);

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Tivemos um problema ao carregar nossas bordas</p>;

  return (
    <article>
      <p>Que tipo de borda você curte?</p>

      {crusts.map((item) => (
        <Form.Check
          key={item.description}
          type='radio'
          label={item.description}
          name='crust'
          id={item.description}
          onChange={(e) => e.target.checked && handleSelectCrust(item)}
        />
      ))}

      <hr className='mt-5' />

      <footer className='ketchup-footer'>
        <Button variant='secondary' onClick={previous} size='sm'>
          Voltar
        </Button>

        <Button onClick={handleGoToNextStep} size='sm'>
          Próximo
        </Button>
      </footer>
    </article>
  );
}

SelectCrust.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default SelectCrust;
