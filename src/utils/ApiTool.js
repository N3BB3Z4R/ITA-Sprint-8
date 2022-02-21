import { filmImages } from '../utils/filmImages';

const SWAPI_URL = 'https://swapi.py4e.com/api';
const IMAGES_API_URL = 'https://starwars-visualguide.com/assets/img';

export const getShipList = async (pageNumber) => {
  try {
    const res = await fetch(`${SWAPI_URL}/starships/?page=${pageNumber || 1}`);
    const res_1 = await res.json();
    return res_1.results.map(ship => {
      return {
        id: ship.url.match(/\/(\d+)(\/|$)/)?.[1],
        ...ship,
      };
    });
  } catch (error) {
    return console.log(error);
  }
}


export const getShip = async (id) => {
  try {
    const res = await fetch(`${SWAPI_URL}/starships/${id}`);
    return await res.json();
  } catch (error) {
    return console.log(error);
  }
}

export const getFilms = async (filmUrls) => {
  // https://swapi.py4e.com/api/films/3/?format=json
  if (!filmUrls) return Promise.resolve([]);
  const films = await Promise.all(filmUrls.map(filmUrl => fetch(filmUrl)
    .then(res => res.json())
    .catch(error => console.log(error))
  ));
  return films.filter(film => !!film);
}

export function getFilmImageUrl(filmId) {
  console.log('film image', filmId);
  return filmImages[filmId-1];
}

export const getPilots = async (pilotUrls) => {
  if (!pilotUrls) return Promise.resolve([]);
  const pilots = await Promise.all(pilotUrls.map(pilotUrl => fetch(pilotUrl)
    .then(res => res.json())
    .catch(error => console.log(error))
  ));
  return pilots.filter(pilot => !!pilot);
}

export const getStarshipImageUrl = (starshipId) => {
  return `${IMAGES_API_URL}/starships/${starshipId}.jpg`
}