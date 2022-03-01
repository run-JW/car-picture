export default class EmptyResult {
    constructor({ $target, initialState }) {
        this.$emptyResult = document.createElement('div');
        this.$emptyResult.className = 'EmptyResult';
        this.state = initialState;

        $target.appendChild(this.$emptyResult);

        this.render();
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.$emptyResult.innerHTML = `<h1>검색 결과 없음</h1>`
        this.$emptyResult.style.display = this.state.visible ? 'block' : 'none';
    }
}