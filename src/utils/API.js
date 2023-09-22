const api = '6rMXH_SEfMCGZkPJBlJ0FFNWZeJO7V6Y6yiGyJRiHnbU_9wkfR9NLGGtQsvoZm3X6DsHxiKIv-xGVpbKwHCXNAPA1Uqv4fgzeDPIGov49xCKATntoaxMVcku4WcMZXYx';

const corsPermission= 'https://cors-anywhere.herokuapp.com/'
const yelpAPI = 'https://api.yelp.com/v3';

export async function getSearch(searchTerm, searchLocation, sortBy) {
  const businessSearch = '/businesses/search';
  const infoSearch = `?term=${searchTerm}&location=${searchLocation}&sort_by=${sortBy}`;
  const endpoint = `${corsPermission}${yelpAPI}${businessSearch}${infoSearch}`;

  try {
    const response = await fetch(endpoint, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${api}`,
        'Accept': 'application/json',
        'Origin': 'http://localhost:3000/',
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    const businesses = data.businesses; // Extract businesses array

    return businesses;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    return null;
  }
}

