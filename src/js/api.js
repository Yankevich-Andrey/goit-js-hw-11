import axios from 'axios';

const API_KEY = '39870306-a5025e7f1f5b1849e80960310';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchCard(query, page) {
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
    page,
  });
  const resp = await axios.get(`${BASE_URL}?${params}`);
  return resp.data;
}
