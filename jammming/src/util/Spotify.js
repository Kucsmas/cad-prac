let accessToken=""
const clientId = 'bf1ca28115634816a65dc097d7ba9356'


/*let url = `https://accounts.spotify.com/authorize
           ?response_type=token
           &client_id=${clientId}`; */





const Spotify = {
  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/) &&
               window.location.href.match(/expires_in=([^&]*)/)) {
        accessToken = window.location.href.match(/access_token=([^&]*)/);
        let expiresIn = window.location.href.match(/expires_in=([^&]*)/);
        return expiresIn
    }

  }

/*var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
*/



}

export default Spotify;
