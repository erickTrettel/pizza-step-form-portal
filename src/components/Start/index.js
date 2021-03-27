import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

function Start({ next }) {
  return (
    <article>
      <p>Pizza recomendada</p>

      <footer>
        <Button onClick={next}>Próximo</Button>
      </footer>
    </article>
  );
}

Start.propTypes = {
  next: PropTypes.func.isRequired,
};

export default Start;
