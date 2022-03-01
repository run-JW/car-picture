const API_ENDPOINT = 
  "https://oivhcpn8r9.execute-api.ap-northeast-2.amazonaws.com/dev";


const request = async url => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.warn(error);
  }
};

const api = {
  fetchCats: keyword => {
    return request(`${API_ENDPOINT}/api/cats/search?q=${keyword}`);
  },
  // fetchGifAll: () => {
  //   return request(`${API_ENDPOINT}/api/gif/all`);
  // }
  fetchCatsRandom50: () => {
    return request(`${API_ENDPOINT}/api/cats/random50`);
  }
};

export default api;