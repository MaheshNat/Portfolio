const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_REPOSITORIES':
      return { ...state, repositories: action.repositories };
    case 'LOAD_PROJECTS':
      return { ...state, projects: action.projects };
    default:
      return state;
  }
};
