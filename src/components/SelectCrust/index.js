import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import { fetchCrusts, clear } from '../../store/crust';

function SelectCrust({ next, previous }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.crust.loading);
  const crusts = useSelector((state) => state.crust.data);
  const error = useSelector((state) => state.crust.error);

  useEffect(() => {
    dispatch(fetchCrusts());

    return () => dispatch(clear());
  }, [dispatch]);

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Tivemos um problema ao carregar nossas bordas</p>;

  return (
    <article>
      <p>Que tipo de borda você curte?</p>

      {crusts.map((item) => (
        <Form.Check
          key={item}
          type='radio'
          label={item.description}
          name='crust'
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

SelectCrust.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default SelectCrust;
