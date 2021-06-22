export const showGames = (games) => ({
  type: 'SHOW_GAMES',
  payload: games,
});

export const showPlatforms = (platforms) => ({
  type: 'SHOW_PLATFORMS',
  payload: platforms,
});

export const showGameDetails = (game) => ({
  type: 'SHOW_GAME_DETAILS',
  payload: game,
});

export const setLoading = (val) => ({
  type: 'SET_LOADING',
  payload: val,
});

export const fetchGameList = () => async (dispatch) => {
  const games = await fetch('https://frozen-shelf-35879.herokuapp.com/https://www.giantbomb.com/api/games/?api_key=a49d1e3f0d18a6120a595dd1d2b6d2f4c8278c5b&format=json&limit=24&field_list=image,name,platforms,guid').then((res) => res.json());
  dispatch(setLoading(true));
  dispatch(showGames(games.results));
};

export const fetchPlatforms = () => async (dispatch) => {
  const platforms = await fetch('https://frozen-shelf-35879.herokuapp.com/https://www.giantbomb.com/api/platforms/?api_key=a49d1e3f0d18a6120a595dd1d2b6d2f4c8278c5b&format=json&field_list=id,name&limit=20').then((res) => res.json());
  dispatch(showPlatforms(platforms.results));
};

export const fetchGameDetails = (guid) => async (dispatch) => {
  const game = await fetch(`https://frozen-shelf-35879.herokuapp.com/https://www.giantbomb.com/api/game/${guid}/?api_key=a49d1e3f0d18a6120a595dd1d2b6d2f4c8278c5b&format=json&field_list=image,description,name,platforms,deck,developers,genres,original_release_date`).then((res) => res.json());
  dispatch(showGameDetails(game.results));
};
