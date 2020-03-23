import React from 'react';

export const CardViewTable = ({ info, classes }) => {
  const toUpperCase = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Name
  let name = '';

  if (info.id < 10) {
    name = toUpperCase(info.forms[0].name) + ' #00' + info.id;
  } else {
    name = toUpperCase(info.forms[0].name) + ' #0' + info.id;
  }

  // Type
  const type = info.types.map(i => toUpperCase(i.type.name)).join(', ');

  return (
    <>
      <p className='title'>
        <b>{name}</b>
      </p>
      <table className={classes}>
        <tbody>
          <tr>
            <td>Type</td>
            <td>{type}</td>
          </tr>
          <tr>
            <td>Attack</td>
            <td>{info.stats[4].base_stat}</td>
          </tr>
          <tr>
            <td>Defense</td>
            <td>{info.stats[3].base_stat}</td>
          </tr>
          <tr>
            <td>HP</td>
            <td>{info.stats[5].base_stat}</td>
          </tr>
          <tr>
            <td>SP Attack</td>
            <td>{info.stats[2].base_stat}</td>
          </tr>
          <tr>
            <td>SP Defense</td>
            <td>{info.stats[1].base_stat}</td>
          </tr>
          <tr>
            <td>Speed</td>
            <td>{info.stats[0].base_stat}</td>
          </tr>
          <tr>
            <td>Weigth</td>
            <td>{info.weight}</td>
          </tr>
          <tr>
            <td>Total moves</td>
            <td>{info.moves.length}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
