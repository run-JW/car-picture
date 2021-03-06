import { getItem } from "../utils/sessionStorage.js";
export default class SearchResult {
    $searchResult = null;
    data = null;
    onClick = null;
  
    constructor({ $target, initialData, onClick }) {
      this.$searchResult = document.createElement("section");
      this.$searchResult.className = "SearchResult";
      $target.appendChild(this.$searchResult);
  
      const datas = getItem('data');
      
      if (datas) {
        this.data = datas 
      } else {
        this.data = initialData;
      }
      
      this.onClick = onClick;
  
      this.render();
    }
  
    setState(nextData) {
      this.data = nextData;
      this.render();
    }
  
    render() {
      this.$searchResult.innerHTML = this.data
        .map(
          cat => `
            <figure class="item">
              <img src=${cat.url} alt=${cat.name} title=${cat.name}/>
            </figure>
          `
        )
        .join("");
  
      this.$searchResult.querySelectorAll(".item").forEach(($item, index) => {
        $item.addEventListener("click", () => {
          this.onClick(this.data[index]);
        });
      });
    }
  }
  