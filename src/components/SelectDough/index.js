import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function SelectDough({ next, previous }) {
  return (
    <article>
      <p>Selecione a massa</p>

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
