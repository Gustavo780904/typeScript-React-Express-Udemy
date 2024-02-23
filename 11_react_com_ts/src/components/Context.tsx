import React, { useContext } from 'react';
import { AppContext } from '../App';

const Context = () => {
  const details = useContext(AppContext)
  return (
    <div>
      {details && (
        <>
          <h2>
            Linguagem: { details.language }
          </h2>
          <h4>
            FW: {details.framework}
          </h4>
          <p>
            QTD: {details.projects}
          </p>
        </>)}
    </div>
  );
}
export default Context;