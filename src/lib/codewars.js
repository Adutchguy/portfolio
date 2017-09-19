import superagent from 'superagent';
export const userRequest = () => {
  return superagent.get(`${process.env.REACT_APP_API_URL}/Adutchguy?${process.env.REACT_APP_CW_TOKEN}`)
    .then(res => {
      console.log(res.body);
      return res.body;
    })
    .catch(err => {
      console.error(err);
    });
};

// export const userRequest = () => {
//   let ur = new XMLHttpRequest();
//   ur.open('GET', `${process.env.REACT_APP_API_URL}/Adutchguy?${process.env.REACT_APP_CW_TOKEN}`,true);
//   ur.send();
//   ur.response
// };
