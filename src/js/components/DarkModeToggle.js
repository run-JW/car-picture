export default class DarkModeToggle {
  
    constructor({ $target }) {
      this.isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
      const $darkModeToggle = document.createElement("input");
      $darkModeToggle.className = "DarkModeToggle";
      $darkModeToggle.type = "checkbox";
      $darkModeToggle.textContent = "다크모드 활성화";
      this.$darkModeToggle = $darkModeToggle;
      $target.appendChild($darkModeToggle);
  
    //   this.render();
    }
  
    // setState(nextData) {
    //   this.data = nextData;
    //   this.render();
    // }
  
    // render() {
    //   if (this.data.visible) {
    //     const { name, url, temperament, origin } = this.data.image;
  
    //     this.$imageInfo.innerHTML = `
    //       <div class="content-wrapper">
    //         <div class="title">
    //           <span>${name}</span>
    //           <div class="close">x</div>
    //         </div>
    //         <img src="${url}" alt="${name}"/>        
    //         <div class="description">
    //           <div>성격: ${temperament}</div>
    //           <div>태생: ${origin}</div>
    //         </div>
    //       </div>`;
    //     this.$imageInfo.style.display = "block";
    //   } else {
    //     this.$imageInfo.style.display = "none";
    //   }
    // }
  }
  