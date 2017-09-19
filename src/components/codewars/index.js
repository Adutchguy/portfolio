import React from 'react';
import * as cwReq from '../../lib/codewars.js';

const getData = () => {
  let data;
  data = cwReq.userRequest();
  return data.toString();
};

class CodeWarsContainer extends React.Component{

  render() {
    return(
      <div className='code-wars-container'>
        {getData()}
      </div>
    );
  }
}

export default CodeWarsContainer;
