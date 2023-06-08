/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('');
  I.wait(10);
  I.seeElement('.Restaurant__name a');

  const firstRestaurant = locate('.Restaurant__name a').first();
  const restaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(10);
  I.seeElement('.Restaurant-item');
  const likedRestaurantName = await I.grabTextFrom('.Restaurant__name');

  assert.strictEqual(restaurantName, likedRestaurantName);
});

Scenario('Cancel liking a restaurant', ({ I }) => {
  I.amOnPage('');
  I.wait(10);
  I.seeElement('.Restaurant__name a');

  const firstRestaurant = locate('.Restaurant__name a').first();
  I.click(firstRestaurant);
  I.wait(10);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(10);
  I.seeElement('.Restaurant-item');
  I.click(firstRestaurant);
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.wait(5);
  I.dontSeeElement('.Restaurant-item');
});
