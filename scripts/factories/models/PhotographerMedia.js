export default class PhotographerMedia {
  constructor(media) {
    this._id = media.id;
    this._photographerId = media.photographerId;
    this._title = media.title;
    this._image = media.image;
    this._video = media.video;
    this._likes = media.likes;
    this._date = media.date;
    this._price = media.price;
    this._alt = media.alt;
  }

  get link() {
    return this._image ? this._image : this._video;
  }

  getImg() {
    const miniature = `assets/images/${this._photographerId}/${this.link}`;
    const likesNumber = parseInt(this._likes, 10);
    return `
      <article>
        <img src="${miniature}" class="gallery-img" alt="${this._alt}">
        <div class="media-caption">
            <span class="title">${this._title}</span>
            <p class="likes">
                <span class="likes-number">${likesNumber} </span>
                <i aria-label=”likes” class="fas fa-heart"></i></p>
        </div>
      </article>
      `;
  }

  getVideo() {
    const miniature = `assets/images/${this._photographerId}/${this.link}`;
    return `
      <article>
        <video controls width="350" height="300">
            <source src="${miniature}" type="video/mp4" class="gallery-video" alt="${this._alt}">
        </video>
        <div class="media-caption">
            <span class="title">${this._title}</span>
            <span class="likes">${this._likes} <i aria-label=”likes” class="fas fa-heart"></i></span>
        </div>
      </article>
      `;
  }
}
