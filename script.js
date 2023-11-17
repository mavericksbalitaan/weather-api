let searchInput = document.querySelector('#search-input');
let searchButton = document.querySelector('#search-button');
let cardsContainer = document.querySelector('.cards-container');

const fetchAPI = () => {
  cardsContainer.innerHTML = '';

  let apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${searchInput.value}?key=5KZNVBS78BXNU9MJWS9T4LD9E`;

  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let h1 = document.createElement('h1');
      h1.textContent = data.resolvedAddress;
      document.querySelector('#title').appendChild(h1);

      let days = data.days;

      days.map((el) => {
        let card = document.createElement('div');
        card.classList.add('card');

        let datetime = document.createElement('p');
        let tempmax = document.createElement('p');
        let tempmin = document.createElement('p');
        let icon = document.createElement('img');

        datetime.textContent = el.datetime;
        tempmax.textContent = el.tempmax;
        tempmin.textContent = el.tempmin;
        icon.src = `./assets/icons/${el.icon}.svg`;
        icon.alt = el.icon;

        icon.style.width = '50px';

        card.append(datetime, tempmax, tempmin, icon);
        cardsContainer.appendChild(card);
      });
    });
};

searchButton.addEventListener('click', fetchAPI);
window.addEventListener('keypress', (e) => {
  e.key == 'Enter' ? fetchAPI() : '';
});

(() => {
  cardsContainer.innerHTML = '';
  let apiURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Manila?key=5KZNVBS78BXNU9MJWS9T4LD9E`;

  fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let h1 = document.createElement('h1');
      h1.textContent = data.resolvedAddress;
      document.querySelector('#title').appendChild(h1);

      let days = data.days;

      days.map((el) => {
        let card = document.createElement('div');
        card.classList.add('card', 'fade-in');

        let datetime = document.createElement('p');
        let tempmax = document.createElement('p');
        let tempmin = document.createElement('p');
        let icon = document.createElement('img');

        datetime.textContent = el.datetime;
        tempmax.textContent = el.tempmax + '°C';
        tempmin.textContent = el.tempmin + '°C';
        icon.src = `./assets/icons/${el.icon}.svg`;
        icon.alt = el.icon;

        card.style.backgroundImage = `url("icon.src")`;

        card.append(icon, datetime, tempmax, tempmin);
        cardsContainer.appendChild(card);
      });
    });
})();