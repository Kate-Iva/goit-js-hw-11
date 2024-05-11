const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43788536-1320d3af2b7eba5483923831a';

export const getImages = (searchValue = '') => {
  return fetch(
    `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(
      searchValue
    )}&image_type=photo&orientation=horizontal&safesearch=true`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};