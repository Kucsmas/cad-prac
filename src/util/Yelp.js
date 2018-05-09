const apiKey = 'QHMd3PYlF0h_RXmp3iXV7Dp_VfDdl4Kn9UvIhGAXDGc_p5AKKrV4wOB73KByBl2WlhNM3Eav36t2_8_SywiuCZnpmUyXX2WJ_5hLhFH5je7so2xoY75ySwCb_o_wWnYx'


const Yelp = {
  search(term, location, sortBy) {


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
              imageSrc: business.img_url,
              name: business.name,
              address: business.location.address1,
              city: business.location.city,
              state: business.location.state,
              zipCode: business.location.zip_code,
              category: business.categories,
              rating: business.rating,
              reviewCount: business.review_count,
            }
          });
        }
     });
  }
}

export default Yelp;
