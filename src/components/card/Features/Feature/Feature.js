import React from 'react';
import { FEATURES } from '../../../../utils/index';

const Feature = ({ name }) => {
  const className = `feature ${FEATURES[name]}`;

  return (
    <div className={className}>
      <p>{name}</p>
    </div>
  );
};

export default Feature;
