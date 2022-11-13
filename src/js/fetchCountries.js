import Notiflix from 'notiflix';

function fetchCountries(name) {
  const BASE_URL = 'https://restcountries.com/v3.1/name';
  const FILTERS = '?fields=name,capital,flags,languages,population';

  return fetch(`${BASE_URL}/${name}${FILTERS}`).then(response => {
    if (response.status === 200) {
      return response.json();
    }

    if (response.status === 404) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    }
  });
}

export { fetchCountries };
