import { useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import { useSelector, useDispatch } from 'react-redux';

import {
  fetchDaySuggestion,
  selectDaySuggestion,
  clear,
} from '../../store/daySuggestion';

import Summary from '../Summary';

import pizzaImg from '../../assets/pizza-beauty.jpg';

function Start({ next }) {
  const dispatch = useDispatch();

  const isLoading = useSelector((state) => state.daySuggestion.loading);
  const daySuggestion = useSelector((state) => state.daySuggestion.data);
  const error = useSelector((state) => state.daySuggestion.error);

  const dayOfTheWeek = useMemo(() => new Date().getDay() + 1, []);

  useEffect(() => {
    dispatch(fetchDaySuggestion(dayOfTheWeek));

    return () => dispatch(clear());
  }, [dispatch, dayOfTheWeek]);

  const handleSelectDaySuggestion = useCallback(
    () => dispatch(selectDaySuggestion(dayOfTheWeek)),
    [dispatch, dayOfTheWeek]
  );

  if (isLoading) return <p>Carregando...</p>;

  if (error) return <p>Tivemos um problema ao carregar a pizza do dia</p>;

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <div>
          <p>Que tal experimentar a pizza do dia?</p>

          <Summary pizza={daySuggestion} />
        </div>

        <img className='step-image' src={pizzaImg} alt='Pizza do dia' />
      </div>

      <hr className='mt-5' />

      <footer className='step-footer'>
        <Button onClick={handleSelectDaySuggestion} size='sm'>
          Eu quero!
        </Button>

        <Button onClick={next} size='sm'>
          Quero montar minha pizza
        </Button>
      </footer>
    </div>
  );
}

Start.propTypes = {
  next: PropTypes.func.isRequired,
};

export default Start;
