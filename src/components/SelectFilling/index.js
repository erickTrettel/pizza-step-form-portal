import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { toast } from 'react-toastify';
import { fetchFillings, clear } from '../../store/filling';
import { setFilling } from '../../store/pizza';

function SelectFilling({ next, previous }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.filling.loading);
  const fillings = useSelector((state) => state.filling.data);
  const error = useSelector((state) => state.filling.error);

  const selectedFilling = useSelector((state) => state.pizza.filling);

  useEffect(() => {
    dispatch(fetchFillings());

    return () => dispatch(clear());
  }, [dispatch]);

  const handleSelectFilling = useCallback(
    (item) => dispatch(setFilling(item)),
    [dispatch]
  );

  const handleGoToNextStep = useCallback(() => {
    if (!selectedFilling) {
      toast.warning('Você deve selecionar o recheio da pizza primeiro');
    } else {
      next();
    }
  }, [selectedFilling, next]);

  if (isLoading) return <p>Carregando...</p>;

  if (error)
    return <p>Tivemos um problema ao carregar nossos deliciosos recheios</p>;

  return (
    <article>
      <p>Hmm, agora o principal:</p>

      {fillings.map((item) => (
        <Form.Check key={item.description} type='radio' id={item.description}>
          <Form.Check.Input
            type='radio'
            name='filling'
            onChange={(e) => e.target.checked && handleSelectFilling(item)}
          />

          <Form.Check.Label>{item.description}</Form.Check.Label>

          <br />

          <small>
            Ingredientes:{' '}
            {item.ingredients.map((ingredient, index) => (
              <span key={ingredient.description}>
                {ingredient.description}
                {index + 1 < item.ingredients.length && ', '}
              </span>
            ))}
          </small>
        </Form.Check>
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

SelectFilling.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default SelectFilling;
