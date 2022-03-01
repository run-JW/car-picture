export default class DarkModeToggle {
  
    constructor({ $target }) {
      const $darkModeToggle = document.createElement("input");
      $darkModeToggle.className = "DarkModeToggle";
      $darkModeToggle.type = "checkbox";
      this.$darkModeToggle = $darkModeToggle;
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

      $target.appendChild($darkModeToggle);
  
      this.render();
    }

    setState() {}

    render() {
        
    }
  }
  