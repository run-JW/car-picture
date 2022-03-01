export default class RandomBtn {
    constructor({$target, onClick}) {
        this.randomBtn = document.createElement('button');
        this.randomBtn.className = 'randomBtn';
        this.randomBtn.textContent = '랜덤 버튼'
        this.onClick = onClick;
        this.randomBtn.addEventListener('click', this.onClick);

        $target.appendChild(this.randomBtn);
    }
}