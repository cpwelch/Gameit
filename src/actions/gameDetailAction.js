import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  dispatch({
    type: "LOADING_DETAIL",
  });

  const detailData = await axios.get(gameDetailsURL(id), {
    params: { key: process.env.REACT_APP_RAWG_API },
  });
  const screenshotData = await axios.get(gameScreenshotsURL(id), {
    params: { key: process.env.REACT_APP_RAWG_API },
  });

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screenshots: screenshotData.data,
    },
  });
};
