import React from 'react';
import PropTypes from 'prop-types';


function Frozen2({name, picture, rating}) {
  return (
  <div>
    <img src={picture} alt={name} />
    <h1>I like {name}</h1>
    <h4>{rating}</h4>
  </div>
  )
}

Frozen2.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

const frozenILike = [
  {
    id: 1,
    name: 'frozen2',
    image:
    "../images/img01.jpeg",
    rating: 5
  },
  {
    id: 2,
    name: 'elsa',
    image:
    "../images/img02.jpeg",
    rating: 4.9
  },
  {
    id: 3,
    name: 'anna',
    image:
    "../images/img03.jpeg",
    rating: 4.8
  },
  {
    id: 4,
    name: 'kristoff',
    image: 
    "../images/img04.jpeg",
    rating: 4.7
  },
  {
    id: 5,
    name: 'olaff',
    image:
    "../images/img05.jpeg",
    rating: 4.6
  }
]

// function renderFrozen(frozen){

//   return <Frozen2 name={frozen.name} picture={frozen.image} key={frozen.id} />
// }


function Frozen() {
  return (
  <div class="wrap">
    {frozenILike.map(mov =>(
      <Frozen2 name={mov.name} picture={mov.image} key={mov.id} rating={mov.rating} />
    ))}
  </div>
  );
}

export default Frozen;