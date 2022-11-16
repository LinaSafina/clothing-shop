import hats from '../../assets/hats.jpg';
import women from '../../assets/women.jpg';
import men from '../../assets/men.jpg';
import jackets from '../../assets/jackets.jpg';
import trainers from '../../assets/trainers.jpg';

const images = {
  hats,
  women,
  men,
  jackets,
  trainers,
};

function getImageByKey(key) {
  return images[key];
}

export default getImageByKey;
