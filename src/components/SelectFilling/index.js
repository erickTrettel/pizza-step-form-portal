import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function SelectFilling({ next, previous }) {
  return (
    <article>
      <p>Selecione o recheio</p>

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
