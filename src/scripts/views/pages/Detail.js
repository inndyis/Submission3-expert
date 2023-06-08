import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/Restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter.js';
import FavoriteRetaurantIdb from '../../data/favorite-restaurant-idb';

const DetailRestaurant = {
  async render() {
    return `
    <div id="Restaurant" class="Restaurant"></div>
    <div id="likeButtonContainer" claas="like"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const Restaurant = await RestaurantDbSource.detailRestaurant(url.id);
    const RestaurantContainer = document.querySelector('#Restaurant');
    RestaurantContainer.innerHTML = createRestaurantDetailTemplate(Restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurant: FavoriteRetaurantIdb,
      restaurant: {
        ...Restaurant,
      },
    });
  },
};

export default DetailRestaurant;
