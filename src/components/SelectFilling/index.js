import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { fetchFillings, clear } from '../../store/filling';

function SelectFilling({ next, previous }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.filling.loading);
  const fillings = useSelector((state) => state.filling.data);
  const error = useSelector((state) => state.filling.error);

  useEffect(() => {
    dispatch(fetchFillings());

    return () => dispatch(clear());
  }, [dispatch]);

  if (isLoading) return <p>Carregando...</p>;

  if (error)
    return <p>Tivemos um problema ao carregar nossos deliciosos recheios</p>;

  return (
    <article>
      <p>Hmm, agora o principal:</p>

      {fillings.map((item) => (
        <Form.Check key={item} type='radio' id={item.description}>
          <Form.Check.Input type='radio' name='filling' />

          <Form.Check.Label>{item.description}</Form.Check.Label>

          <br />

          <small>
            Ingredientes:{' '}
            {item.ingredients.map((ingredient, index) => (
              <span>
                {ingredient.description}
                {index + 1 < item.ingredients.length && ', '}
              </span>
            ))}
          </small>
        </Form.Check>
      ))}

      <footer>
        <Button onClick={previous}>Voltar</Button>
        <Button onClick={next}>Próximo</Button>
      </footer>
    </article>
  );
}

SelectFilling.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default SelectFilling;
