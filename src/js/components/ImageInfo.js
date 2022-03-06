export default class ImageInfo {
    $imageInfo = null;
    data = null;
  
    constructor({ $target, data }) {
      const $imageInfo = document.createElement("section");
      $imageInfo.className = "ImageInfo";
      this.$imageInfo = $imageInfo;
      $target.appendChild($imageInfo);
  
      this.data = data;
  
      this.render();
    }
  
    setState(nextData) {
      this.data = nextData;
      this.render();
    }
  
    render() {
      if (this.data.visible) {
        const { name, url, temperament, origin } = this.data.image;

        this.$imageInfo.classList.remove('fade');
        this.$imageInfo.innerHTML = `
          <div class="content-wrapper">
            <div class="title">
              <span>${name}</span>
              <div class="close">x</div>
            </div>
            <img src="${url}" alt="${name}"/>        
            <div class="description">
              <div>성격: ${temperament}</div>
              <div>태생: ${origin}</div>
            </div>
          </div>`;

        this.$imageInfo.style.display = "block";

        document.addEventListener('click', event => {
          if (event.target === document.querySelector('.ImageInfo') || event.target === document.querySelector(".close")) {
            this.$imageInfo.classList.add('fade');
          }
        });

        document.addEventListener('keyup', event => {
          if (event.key === 'Escape') {
            this.$imageInfo.classList.add('fade');
          }
        });

      } else {
        this.$imageInfo.style.display = "none";
      }
    }
  }
  