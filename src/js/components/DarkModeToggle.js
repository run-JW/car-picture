import { setItem, getItem } from "../utils/sessionStorage.js";

export default class DarkModeToggle {
  
  constructor({ $target, event }) {
    this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    // this.isChecked = (this.isDark) ? true : false;
    
    const $toggleBtn = document.createElement('div');

    const initialDarkMode = getItem('isDark');

    

    if (initialDarkMode) {
      this.isDark = initialDarkMode;
      if (this.isDark === true) {
        document.body.classList.add('dark');
      }
    } else {
      $toggleBtn.className = (this.isDark) ? 'dark' : 'light';
    }
  
    const $input = document.createElement("input");      
    $input.type = "checkbox";
    $input.checked = this.isDark;
    
    const $text = document.createElement('span');
    $text.textContent = '다크 모드 전환';

    $toggleBtn.appendChild($input);
    $toggleBtn.appendChild($text);
    $target.appendChild($toggleBtn);

    $input.addEventListener('change', event => {
      if (this.isDark) {
        event.target.parentNode.className = 'light';
        this.isDark = false;
        document.body.classList.remove('dark');
        document.body.classList.add('ligth');
        setItem('isDark', this.isDark);
      } else {
        event.target.parentNode.className = 'dark';
        this.isDark = true;
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        setItem('isDark', this.isDark);
      }
    });
  }
}
  