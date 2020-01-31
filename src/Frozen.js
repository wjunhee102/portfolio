import React from 'react';
import PropTypes from 'prop-types';


function Frozen2({name, picture, rating}) {
  return (
  <div>
    <h1>I like {name}</h1>
    <h4>{rating}</h4>
    <img src={picture} alt={name} />
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
    "https://image.chosun.com/sitedata/image/201911/20/2019112000986_0.png",
    rating: 5
  },
  {
    id: 2,
    name: 'elsa',
    image:
    "https://lh3.googleusercontent.com/proxy/RALgcA3GK317MFvCQa7L_pkuoniH4TzKuWgsKjMVCINLGppmGo4SkW9P-HVaFwlYh4mT1zv1A-pgxk21iz6k9Y2lFoysWlRBBlWRCSBoazhhr8rIECYSPyGgaeznyC0UVjQauRcu3Q",
    rating: 4.9
  },
  {
    id: 3,
    name: 'anna',
    image:
    "https://img.extmovie.com/files/attach/images/135/861/838/051/4732d61d57e59efe327b7e0b68b4acb5.jpg",
    rating: 4.8
  },
  {
    id: 4,
    name: 'kristoff',
    image: 
    "https://kr.theepochtimes.com/assets/uploads/2019/12/bac4937c2e0672d5508bcf5ac6412a74.png",
    rating: 4.7
  },
  {
    id: 5,
    name: 'olaff',
    image:
    "https://img.extmovie.com/files/attach/images/135/952/585/051/5f0c8c8ba863f4432fc1d96e2b874a98.jpeg",
    rating: 4.6
  }
]

// function renderFrozen(frozen){

//   return <Frozen2 name={frozen.name} picture={frozen.image} key={frozen.id} />
// }


function Frozen() {
  return (
  <div>
    {frozenILike.map(mov =>(
      <Frozen2 name={mov.name} picture={mov.image} key={mov.id} rating={mov.rating} />
    ))}
  </div>
  );
}

export default Frozen;