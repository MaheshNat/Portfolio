import axios from 'axios';

export const loadProjects = () => {
  return (dispatch, getState) => {
    axios
      .get('/projects/')
      .then((res) => {
        dispatch({ type: 'LOAD_PROJECTS', projects: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
