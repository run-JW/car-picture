export default class Loading {
    constructor({ $target, initialState }) {
        this.$loading = document.createElement('div');
        this.$loading.className = 'Loading';
        $target.appendChild(this.$loading);

        this.state = initialState;

        this.render();
    }

    setState(nextState) {
        this.state = nextState;
        this.render();
    }

    render() {
        this.$loading.innerHTML = `
        <div class="content">
            <img src="../../../public/assets/loading.gif" />
        </div>
        `
        this.$loading.style.display = this.state.visible ? 'block' : 'none';
    }
}