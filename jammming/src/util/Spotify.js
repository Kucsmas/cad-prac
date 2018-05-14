let accessToken="";
let expiresIn=0;
const clientId = 'bf1ca28115634816a65dc097d7ba9356';
const uri = "http://localhost:3000/";


const Spotify = {

  search(term) {

    return fetch(
      `https://api.spotify.com/v1/search?type=track&q=${term}`,
      {
        headers: {Authorization:'Bearer ${accessToken}'}
      }
    ).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.tracks) {
        return jsonResponse.tracks.map(track => {
          return {
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            URI: track.uri
          } // return
        }) //.map
      } //if
    }); // .then 2
  },//search

  getAccessToken() {
    if (accessToken) {
      return accessToken;
    } else if (window.location.href.match(/access_token=([^&]*)/) &&
               window.location.href.match(/expires_in=([^&]*)/)) {
        let accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        let expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
        accessToken = accessTokenMatch[1];
        const expiresIn = Number(expiresInMatch[1]);
        window.setTimeout(() => accessToken = '', expiresIn * 1000);
        window.history.pushState('Access Token', null, '/');
    } else if (!accessToken && window.location.href.match(/access_token=([^&]*)/) === null) {
      window.location = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${uri}`
    }
  },

 savePlaylist (name, URIs) {
    if (!this.tracks.name && !this.tracks.URI ) {
      return;
    }

    let accessToken = this.getAccessToken();
    let headers = {
      Authorization: `https://accounts.spotify.com/authorize?
                          client_id=${clientId}
                          &redirect_uri=${uri}
                          &response_type=token` };
    let userId = '';

    fetch(
      'https://api.spotify.com/v1/me',
      {headers: headers}
    ).then(response => {
      return response.json();
    }).then(jsonResponse => {
      userId = jsonResponse.id;
    }).post(
      `https://api.spotify.com/v1/users/${userId}/playlists`,
      {
        headers: headers,
        method: this.search(),
        body: 
      }
    ); //post
  } //savePlaylist

} //spotify






export default Spotify;


/*search(term) {
  return fetch(
    `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
      headers: {
        Authorization: `Bearer ${apiKey}`
      }
    }).then(response => {
      return response.json();
    }).then(jsonResponse => {
      if (jsonResponse.businesses) {
        return jsonResponse.businesses.map(business => {
          return {
            id: business.id,
            imageSrc: business.url,
            name: business.name,
            address: business.location.address1,
            city: business.location.city,
            state: business.location.state,
            zipCode: business.location.zip_code,
            category: business.categories[0].title,
            rating: business.rating,
            reviewCount: business.review_count,
          }
        });
      }
   });
}*/

/*var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var regexp = /[A-E]/gi;
var matches_array = str.match(regexp);

console.log(matches_array);
// ['A', 'B', 'C', 'D', 'E', 'a', 'b', 'c', 'd', 'e']
*/







