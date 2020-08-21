const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_REPOSITORIES':
      return { ...state, repositories: action.repositories };
    case 'LOAD_PROJECTS':
      return { ...state, projects: action.projects };
    case 'LOAD_EPISODES':
      return { ...state, episodes: action.episodes };
    case 'LOAD_RESUME':
      return { ...state, resume: action.resume };
    default:
      return state;
  }
};
