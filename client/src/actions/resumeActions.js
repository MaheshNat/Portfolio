import axios from 'axios';

export const loadResume = () => {
  return (dispatch, getState) => {
    axios({ method: 'get', url: '/resume-file/', responseType: 'blob' })
      .then((res) => {
        dispatch({
          type: 'LOAD_RESUME',
          resume: new Blob([res.data], { type: 'application/pdf' }),
        });
      })
      .catch((err) => console.log(err));
  };
};
