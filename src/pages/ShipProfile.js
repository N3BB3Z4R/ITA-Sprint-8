import React, { useEffect, useState } from 'react';

import './ShipProfile.scss';
import img404 from '../assets/error.webp';
import * as apiTool from '../utils/ApiTool';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import ImageFallback from '../components/ImageFallback/ImageFallback';

const ShipProfile = () => {

  const {id} = useParams()

  const [ship, setShip] = useState(null)
  const [films, setFilms] = useState(null)
  const [pilots, setPilots] = useState(null)

  useEffect(() => {
    apiTool.getShip(id)
      .then(res => setShip(res))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    apiTool.getFilms(ship?.films)
      .then(res => setFilms(res))
    apiTool.getPilots(ship?.pilots)
      .then(res => setPilots(res))
  }, [ship]);

  return (
    <section className="ShipProfile">
      <Header />
      <section className='ShipProfile__container'>
        <ImageFallback src={apiTool.getStarshipImageUrl(id)} fallbackSrc={img404} />
        <div className='ShipProfile_description'>
          <h1 className='ShipProfile__name'>{ship?.name}</h1>
          <p>Tof sith calrissian ablajeck haako gank klaatu. Ablajeck vao kenobi muun nadd. Sesswenna mustafar darth ors obi-wan. Darpa koon calamari vuffi gallia zev mace jinn lars. Disra klaatu fosh joh ka. Illum maul trandoshan cognus. Wilhuff mothma solo quermian tiin geonosian bel arcona. Sidious jan gank raynar kwi. Saffa gorith yavin subterrel. Shaddaa allana mara zev maul. Wicket boltrunians sikan tarasin thistleborn. Biggs davin ruwee solo vagaari. B4-d4 tib kota juvex gonk cody. Billaba sidious motti ryn ahsoka dunwell wirutid ewok kota.</p>
          <div className='ShipProfile__specifications'>
            <div>Model: {ship?.model}</div>
            <div>Manufacturer: {ship?.manufacturer}</div>
            <div>Cost in credits: {ship?.cost_in_credits} Cred</div>
            <div>Length: {ship?.length} m</div>
            <div>Atmospheric speed: {ship?.max_atmosphering_speed}</div>
            <div>Crew: {ship?.crew} pax</div>
            <div>Passengers: {ship?.passengers} pax</div>
            <div>Cargo capacity: {ship?.cargo_capacity} lbs</div>
            <div>Consumables: {ship?.consumables}</div>
            <div>Hyperdrive rating: {ship?.hyperdrive_rating}</div>
            <div>MGLT: {ship?.MGLT}</div>
            <div>Starship class: {ship?.starship_class}</div>
          </div>
          <div>
            <h2>Pilots</h2>
            <div className='ShipProfile__pilots'>
              {pilots?.length === 0 ?
              <div>No Pilots</div> :
              pilots?.map(pilot =>
                <div className='ShipProfile__pilotProfile' key={pilot?.name}>
                  <div>{pilot?.name}</div>
                  <div>Height: {pilot?.height} cm</div>
                  <div>Mass: {pilot?.mass} kg</div>
                  <div>Hair: {pilot?.hair_color}</div>
                  <div>Skin: {pilot?.skin_color}</div>
                  <div>Eyes: {pilot?.eye_color}</div>
                  <div>BirthDate: {pilot?.birth_year}</div>
                  <div>Gender: {pilot?.gender}</div>
                </div>
              )}
           </div>
          </div>
          <div>
            <h2>Films</h2>
            <div className='ShipProfile__films'>
              {films?.length === 0 ?
              <div>No films</div> :
              films?.map(film =>
                <div className='ShipProfile__filmProfile' key={film?.title}>
                  <img className='ShipProfile__filmImage' src={apiTool.getFilmImageUrl(film?.episode_id)} alt={film?.title} />
                  <div>{film?.title}</div>
                  <div>Episode: {film?.episode_id}</div>
                  <div>Director: {film?.director}</div>
                  <div>Producers: {film?.producer}</div>
                  <div>Release date: {film?.release_date}</div>
                  <div>{film?.opening_crawl}</div>
                </div>          
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </section>
  );
}

export default ShipProfile;