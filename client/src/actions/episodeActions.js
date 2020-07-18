import axios from 'axios';

export const loadEpisodes = () => {
  return (dispatch, getState) => {
    axios
      .get('/episodes/')
      .then((res) => {
        dispatch({ type: 'LOAD_EPISODES', episodes: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
