import React from 'react';
import Feature from './Feature/Feature';

const Features = ({ types }) => {
  const newTypes = types.map(t => {
    return t.type.name;
  });

  return (
    <div className='features'>
      {newTypes.map((t, idx) => (
        <Feature name={t} key={idx} />
      ))}
    </div>
  );
};

export default Features;
