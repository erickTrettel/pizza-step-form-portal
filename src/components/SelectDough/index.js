import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { fetchDough, clear } from '../../store/dough';
import { setDough } from '../../store/pizza';

import pizzaImg from '../../assets/pizza-plate.jpg';

function SelectDough({ next, previous }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.dough.loading);
  const dough = useSelector((state) => state.dough.data);
  const error = useSelector((state) => state.dough.error);

  const selectedDough = useSelector((state) => state.pizza.dough);

  const handleSelectDough = useCallback((item) => dispatch(setDough(item)), [
    dispatch,
  ]);

  const handleGoToNextStep = useCallback(() => {
    if (!selectedDough) {
      toast.warning('Você deve selecionar a massa primeiro');
    } else {
      next();
    }
  }, [selectedDough, next]);

  useEffect(() => {
    dispatch(fetchDough());

    return () => dispatch(clear());
  }, [dispatch]);

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Tivemos um problema ao carregar nossas massas</p>;

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div>
          <p>Escolha sua massa favorita</p>

          {dough.map((item) => (
            <Form.Check
              key={item}
              type='radio'
              label={item.description}
              name='dough'
              id={item.description}
              onChange={(e) => e.target.checked && handleSelectDough(item)}
            />
          ))}
        </div>

        <img className='step-image' src={pizzaImg} alt='Massa' />
      </div>

      <hr className='mt-5' />

      <footer className='step-footer'>
        <Button variant='secondary' onClick={previous} size='sm'>
          Voltar
        </Button>

        <Button onClick={handleGoToNextStep} size='sm'>
          Próximo
        </Button>
      </footer>
    </div>
  );
}

SelectDough.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default SelectDough;
