import axios from 'axios';

export const loadRepositories = () => {
  return (dispatch, getState) => {
    axios
      .get('/github/')
      .then((res) => {
        dispatch({ type: 'LOAD_REPOSITORIES', repositories: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
