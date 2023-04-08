import axios from 'axios';
const API_KEY = '35199572-24462bcab0d1c9b478a6c9399';

const BASE_URL = 'https://pixabay.com/api/';

export default class ImageApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
    this.totalHits = 0;
    this.pagesQuantity = 0;
  }

  async getImages() {
    try {
      const response = await axios.get(
        `${BASE_URL}?key=${API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`
      );
      this.incrementPage();
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    return (this.searchQuery = newQuery);
  }

  get totalImages() {
    return this.totalHits;
  }

  set totalImages(newValue) {
    return (this.totalHits = newValue);
  }

  countPagesQuantity() {
    this.pagesQuantity = Math.ceil(this.totalHits / this.perPage);
  }
}
//const API_KEY = '35199572-bN4SswjFCS7Rk4E&';