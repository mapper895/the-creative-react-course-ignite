import axios from "axios";
import { gameDetailsURL, gameSecreenshotURL } from "../api";

export const loadDetail = (id) => async (dispatch) => {
  const detailData = await axios.get(gameDetailsURL(id));
  const screenshotData = await axios.get(gameSecreenshotURL(id));

  dispatch({
    type: "GET_DETAIL",
    payload: {
      game: detailData.data,
      screen: screenshotData.data,
    },
  });
};
