import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { fetchDough, clear } from '../../store/dough';

function SelectDough({ next, previous }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.dough.loading);
  const dough = useSelector((state) => state.dough.data);
  const error = useSelector((state) => state.dough.error);

  useEffect(() => {
    dispatch(fetchDough());

    return () => dispatch(clear());
  }, [dispatch]);

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Tivemos um problema ao carregar nossas massas</p>;

  return (
    <article>
      <p>Escolha sua massa favorita</p>

      {dough.map((item) => (
        <Form.Check
          key={item}
          type='radio'
          label={item.description}
          name='dough'
          id={item.description}
        />
      ))}

      <footer>
        <Button onClick={previous}>Voltar</Button>
        <Button onClick={next}>Próximo</Button>
      </footer>
    </article>
  );
}

SelectDough.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default SelectDough;
