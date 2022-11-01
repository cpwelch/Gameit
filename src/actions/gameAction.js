import axios from "axios";
import {
  popularGamesURL,
  newGamesURL,
  upcomingGamesURL,
  searchGamesURL,
} from "../api";

export const loadGames = () => async (dispatch) => {
  try {
    const popData = await axios.get(popularGamesURL(), {});
    const newGamesData = await axios.get(newGamesURL(), {});
    const upcomingGamesData = await axios.get(upcomingGamesURL(), {});
    dispatch({
      type: "FETCH_GAMES",
      payload: {
        popular: popData.data.results,
        newGames: newGamesData.data.results,
        upcoming: upcomingGamesData.data.results,
      },
    });
  } catch (err) {
    console.log(err);
  }
};

export const fetchSearch = (game_name) => async (dispatch) => {
  try {
    const searchGames = await axios.get(searchGamesURL(game_name), {});
    dispatch({
      type: "FETCH_SEARCHED",
      payload: {
        searched: searchGames.data.results,
      },
    });
  } catch (err) {
    console.log(err);
  }
};
