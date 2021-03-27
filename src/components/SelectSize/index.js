import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function SelectSize({ next, previous }) {
  return (
    <article>
      <p>Selecione o tamanho</p>

      <footer>
        <Button onClick={previous}>Voltar</Button>
        <Button onClick={next}>Próximo</Button>
      </footer>
    </article>
  );
}

SelectSize.propTypes = {
  next: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
};

export default SelectSize;
