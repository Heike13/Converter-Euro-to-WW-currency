import { useState } from 'react';

function Likes() {
  /*
    Le fait de localiser un état dans un composant
    permet d'optimiser le re-rendu :
    seul ce composant sera mis à jour
  */

  // 1. déclaration d'un état
  const [likes, setLikes] = useState(0);

  const handleClick = () => {
    console.log('CLICKED!');
    // 3. modification du state
    setLikes((current) => current + 1);
  };

  return (
    <aside>
      <button onClick={handleClick} type="button">
        Likes : {likes}
      </button>
    </aside>
  );
}
export default Likes;
