import PropTypes from 'prop-types';

function Summary({ pizza }) {
  return (
    <div>
      <div>
        <b>Massa: </b>
        <span>{pizza?.dough.description}</span>
      </div>

      <div>
        <b>Borda: </b>
        <span>{pizza?.crust.description}</span>
      </div>

      <div>
        <b>Recheio: </b>
        <span>{pizza?.filling.description}</span>

        <br />

        <small className='text-muted'>
          {pizza?.filling.ingredients.map((ingredient, index) => (
            <span key={ingredient.description}>
              {ingredient.description}
              {index + 1 < pizza?.filling.ingredients.length && ', '}
            </span>
          ))}
        </small>
      </div>

      <div>
        <b>Tamanho: </b>
        <span>{`${pizza?.size.description} (${pizza?.size.slices} fatias)`}</span>
      </div>
    </div>
  );
}

Summary.propTypes = {
  pizza: PropTypes.shape({
    dough: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }).isRequired,
    crust: PropTypes.shape({
      description: PropTypes.string.isRequired,
    }).isRequired,
    filling: PropTypes.shape({
      description: PropTypes.string.isRequired,
      ingredients: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string.isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
    size: PropTypes.shape({
      description: PropTypes.string.isRequired,
      slices: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Summary;
