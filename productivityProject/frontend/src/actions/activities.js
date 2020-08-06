import axios from "axios";

export const getActivities = () => {
  axios.get("/api/activities").then((res) => {
    return res.data;
  });
};
