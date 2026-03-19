import img1 from './logo.png';
import img2 from './logo.png';
import img3 from './logo.png';

function Galerie() {
  return (
    <div>
      <h3>Galerie</h3>
      <img src={img1} width="150" alt="" />
      <img src={img2} width="150" alt="" />
      <img src={img3} width="150" alt="" />
    </div>
  );
}

export default Galerie;