// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "BQCIVq1h6MOdZ2NkLg5XoPlQWBqVB5qwf2ke9dYLWDjOEtWaL0wqYKmqm_vVioVCt2t7q6Adhhc80PXLjNiBIR06Ge0IIy53jzEiacreTPUlINsnXE80KT9LaCfFIKTAdgIAUcNO2ym7AAklPueImX6bXZ8jBE10uKkP8ROpEwaLtoVuIOv3p9A0s7en8finpGfpJ3jW9J5Ev19KxUWMkh8T9DeF";
const redirectUri = "http://localhost:3000/";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);

      return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;