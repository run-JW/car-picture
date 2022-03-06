const TEMPLATE = '<input type="text">';

export default class SearchInput {
  constructor({ $target, onSearch }) {
    const $searchInput = document.createElement("input");
    this.$searchInput = $searchInput;
    this.$searchInput.placeholder = "고양이를 검색해보세요.|";
    this.$searchInput.autofocus = true;

    $searchInput.className = "SearchInput";
    $target.appendChild($searchInput);

    this.$last5Keywords = [];
    const $last5Keywords = document.createElement('section');
    $last5Keywords.className = 'Last5Keyword';

    $searchInput.addEventListener("keyup", e => {
      if (e.key === 'Enter') {
        onSearch(e.target.value);
      }
    });

    $searchInput.addEventListener("click", e => {
      e.target.value = '';
    });

    console.log("SearchInput created.", this);
  }
}
