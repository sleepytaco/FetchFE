import PropTypes from 'prop-types';

export default function Card({ imgUrl, breedName}) {
  return (
    <>
        <div className="card w-80 bg-base-100 shadow-xl rounded-lg">
            <figure><img src={imgUrl} alt={breedName} className='rounded-lg'/></figure>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-lg">
            <span className="text-white text-lg font-semibold">{breedName}</span>
      </div>
        </div>
    </>
  );
}

Card.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    breedName: PropTypes.string.isRequired,
};