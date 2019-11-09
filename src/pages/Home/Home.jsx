import React, { useContext, useEffect } from 'react';

import { FirebaseContext } from '../../services/Firebase/index';

import './Home.css';

const HomePage = () => {
  const Firebase = useContext(FirebaseContext);

  useEffect(() => {
    const algo = async () => {
      const pagos = await Firebase.getPagosCollection();
      console.log(pagos);
    };

    algo();
  });

  return (
    <div className="Home">
      <h1 className="Home-header">EYESUP</h1>
    </div>
  );
};

export default HomePage;
