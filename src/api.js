const BASE_URL = `https://api.rawg.io/api/`;

const getDate = () => {
  const date = new Date().toISOString().slice(0, 10);
  return date;
};
const currentDate = getDate();

const year = new Date().getFullYear();
const monthUnformat = new Date().getMonth() + 1;
const month = monthUnformat < 10 ? `0${monthUnformat}` : monthUnformat;
const day = new Date().getDate();
const upcomingYear = `${year + 1}-${month < 10 ? `0${month}` : month}-${
  day < 10 ? `0${day}` : day
}`;
const lastYear = `${year - 1}-${month - 1}-${day < 10 ? `0${day}` : day}`;

const popularGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=2022-01-01,${currentDate}&ordering=-rating&page_size=8`;
const upcomingGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${currentDate},${upcomingYear}&ordering=-added&page_size=8`;
const newGames = `games?key=${process.env.REACT_APP_RAWG_API}&dates=${lastYear},${currentDate}&ordering=-released&page_size=8`;

export const popularGamesURL = () => `${BASE_URL}${popularGames}`;
export const upcomingGamesURL = () => `${BASE_URL}${upcomingGames}`;
export const newGamesURL = () => `${BASE_URL}${newGames}`;
export const gameDetailsURL = (game_id) =>
  `${BASE_URL}games/${game_id}.json?&key=${process.env.REACT_APP_RAWG_API}`;
export const gameScreenshotsURL = (game_id) =>
  `${BASE_URL}games/${game_id}/screenshots?&key=${process.env.REACT_APP_RAWG_API}`;
export const searchGamesURL = (game_name) =>
  `${BASE_URL}games?key=${process.env.REACT_APP_RAWG_API}&search=${game_name}&page_size=8`;

console.log(month - 9);
