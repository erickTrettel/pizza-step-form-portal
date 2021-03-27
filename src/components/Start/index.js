import { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import {
  fetchDaySuggestion,
  selectDaySuggestion,
  clear,
} from '../../store/daySuggestion';

import Summary from '../Summary';

function Start({ next }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.daySuggestion.loading);
  const daySuggestion = useSelector((state) => state.daySuggestion.data);
  const error = useSelector((state) => state.daySuggestion.error);

  useEffect(() => {
    dispatch(fetchDaySuggestion(new Date().getDay() + 1));

    return () => dispatch(clear());
  }, [dispatch]);

  const handleSelectDaySuggestion = useCallback(
    () => dispatch(selectDaySuggestion(new Date().getDay() + 1)),
    [dispatch]
  );

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Tivemos um problema ao carregar a pizza do dia</p>;

  return (
    <article>
      <p>Que tal experimentar a pizza do dia?</p>

      <Summary pizza={daySuggestion} />

      <hr className='mt-5' />

      <footer className='ketchup-footer'>
        <Button onClick={handleSelectDaySuggestion} size='sm'>
          Eu quero!
        </Button>

        <Button onClick={next} size='sm'>
          Quero montar minha pizza
        </Button>
      </footer>
    </article>
  );
}

Start.propTypes = {
  next: PropTypes.func.isRequired,
};

export default Start;
