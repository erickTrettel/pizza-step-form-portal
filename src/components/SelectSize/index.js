import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { fetchSizes, clear } from '../../store/size';
import { setSize } from '../../store/pizza';

function SelectSize({ next, previous }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.size.loading);
  const sizes = useSelector((state) => state.size.data);
  const error = useSelector((state) => state.size.error);

  useEffect(() => {
    dispatch(fetchSizes());

    return () => dispatch(clear());
  }, [dispatch]);

  const handleSelectSize = useCallback((item) => dispatch(setSize(item)), [
    dispatch,
  ]);

  if (isLoading) return <p>Carregando...</p>;

  if (error)
    return <p>Tivemos um problema ao carregar os tamanhos disponíveis</p>;

  return (
    <article>
      <p>Qual o tamanho da sua fome?</p>

      {sizes.map((item) => (
        <Form.Check
          key={item.description}
          type='radio'
          label={`${item.description} (${item.slices} fatias)`}
          name='size'
          id={item.description}
          onChange={(e) => e.target.checked && handleSelectSize(item)}
        />
      ))}

      <hr className='mt-5' />

      <footer className='ketchup-footer'>
        <Button onClick={previous} size='sm'>
          Voltar
        </Button>

        <Button onClick={next} size='sm'>
          Próximo
        </Button>
      </footer>
    </article>
  );
}

SelectSize.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default SelectSize;
