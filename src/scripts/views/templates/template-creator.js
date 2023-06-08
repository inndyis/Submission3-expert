import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (Restaurant) => `
  <h2 tabindex="0" class="Restaurant__name">${Restaurant.name}</h2>
  <img tabindex="0" class=Restaurant__picture" src="${CONFIG.BASE_IMAGE_URL + Restaurant.pictureId}" alt="${Restaurant.name}" />
  <div class="Restaurant__info">
    <h3 tabindex="0" >Detail Restaurant</h3>
    <h4>Rating</h4>
    <p>${Restaurant.rating}</p>
    <h4>Alamat</h4>
    <p>${Restaurant.address}</p>
    <h4>Kota</h4>
    <p>${Restaurant.city}</p>
    <div class="Restaurant__Description">
    <h4>Deskripsi</h4>
    <p>${Restaurant.description}</p>
    <h4>Review</h4>
    <p>${Restaurant.customerReviews
    .map(
      (customerReview) => `
    <div class="Restaurant__review">
    <h5>${customerReview.name}</h5>
    <p>${customerReview.review}</p>
    <p>${customerReview.date}</p>
    </div>
    `,
    )
    .join('')}</p>
`;

const createRestaurantItemTemplate = (Restaurant) => `
  <div tabindex="0"  class="Restaurant-item">
    <div class="Restaurant-item__header">
    <img tabindex="0"  class="Restaurant-item__header__picture lazyload" alt="${Restaurant.name}" data-src="${CONFIG.BASE_IMAGE_URL + Restaurant.pictureId}" />
           src="${Restaurant.pictureId ? CONFIG.BASE_IMAGE_URL + Restaurant.pictureId : 'https://restaurant-api.dicoding.dev/images/medium/<pictureId>'}">
      <div tabindex="0"  class="Restaurant-item__header__rating">
        <p tabindex="0">⭐️<span class="Restaurant-item__header__rating__score">${Restaurant.rating}</span></p>
      </div>
    </div>
    <div tabindex="0" class="Restaurant-item__content">
      <h3 tabindex="0" class="Restaurant__name" ><a href="/#/detail/${Restaurant.id}">${Restaurant.name}</a></h3>
      <p tabindex="0" >${Restaurant.description || '-'}</p>
    </div>
  </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i tabindex="0"  class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplste = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i tabindex="0"  class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplste,
};
