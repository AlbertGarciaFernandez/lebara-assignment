import React, { useState } from "react";

import Button from "../../components/atoms/Button/Button";

function Cat() {
  const [imgUrl, setUrl] = useState();
  const callImg = () => {
    fetch("https://api.thecatapi.com/v1/images/search")
      .then((res) => res.json())
      .then((data) => setUrl(data[0].url));
  };
  console.log(imgUrl);
  return (
    <div>
      <button onClick={() => callImg()}>Random cat</button>
      <img src={imgUrl} />
    </div>
  );
}

export default Cat;

// function Cat() {
//   const [cat, setCat] = useState(initialCat);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     updateCat();
//   }, []);

//   const updateCat = (breedId) => {
//     setLoading(true);
//     getCat(breedId)
//       .then((newDog) => {
//         setCat(newDog);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.log(error);
//         setError("Error");
//         setLoading(false);
//       });
//   };
//   return (
//     <div className="app">
//       {error && <div className="error">{error}</div>}

//       <div className="card bounce" onClick={() => updateCat(cat.breed.id)}>
//         <img src={cat.image} alt="dog" />
//         <p>{cat.breed.name}</p>
//       </div>
//     </div>
//   );
// }

// export default Cat;
