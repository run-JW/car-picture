console.log("app is running!");

import DarkModeToggle from './components/DarkModeToggle.js';
import SearchInput from './components/SearchInput.js';
import SearchResult from './components/SearchResult.js';
import ImageInfo from './components/ImageInfo.js';
import Loading from './components/Loading.js';
import api from './services/api/api.js';
import EmptyResult from './components/EmptyResult.js';
import RandomBtn from './components/RandomBtn.js';

export default class App {
  $target = null;
  data = [];

  constructor($target) {
    this.$target = $target;
    
    this.darkModeToggle = new DarkModeToggle({ $target });

    this.randomBtn = new RandomBtn({ $target,
      onClick: () => {
        this.loading.setState({ visible: true });
        api.fetchCatsRandom50().then(({ data }) => {
          this.loading.setState({ visible: false });
          this.setState(data)
        });
      }
    });

    this.searchInput = new SearchInput({
      $target,
      onSearch: keyword => {
        this.loading.setState({ visible: true });
        api.fetchCats(keyword).then(({ data }) => {
          this.loading.setState({ visible: false });
          this.setState(data)
        });
      }
    });

    this.emptyResult = new EmptyResult({
      $target,
      initialState: {
        visible: false
      }
    });

    this.searchResult = new SearchResult({
      $target,
      initialData: this.data,
      onClick: image => {
        this.imageInfo.setState({
          visible: true,
          image
        });
      }
    });

    this.imageInfo = new ImageInfo({
      $target,
      data: {
        visible: false,
        image: null
      }
    });
    
    this.loading = new Loading({
      $target,
      initialState: {
        visible: false
      }
    });
  }

  setState(nextData) {
    console.log(this);
    this.data = nextData;
    if (this.data?.length) {
      this.emptyResult.setState({visible: false});
      this.searchResult.setState(nextData);
    } else {
      this.emptyResult.setState({visible: true});
      this.searchResult.setState([]);
    }
  }
}
