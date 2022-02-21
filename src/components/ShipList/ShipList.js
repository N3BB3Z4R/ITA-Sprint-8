import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

import './ShipList.scss';
import img404 from '../../assets/error.webp';
import * as apiTool from '../../utils/ApiTool';
import ImageFallback from '../ImageFallback/ImageFallback';
import PageLoader from '../../components/PageLoader/PageLoader';

const ShipList = () => {
  const [ships, setShips] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    apiTool.getShipList(1)
      .then(res => setShips(res))
  }, []);

  useEffect(() => {
    apiTool.getShipList(pageNumber)
      .then(res => setShips(res))
  }, [pageNumber]);

  return (
    <div className="ShipList">

      {ships && ships.map(ship => {
        return <Link key={ship.id} to={"/shipprofile/"+ship.id}>
          <div className="ShipList__Element">
            <ImageFallback src={apiTool.getStarshipImageUrl(ship.id)} fallbackSrc={img404} alt={ship.name+' img'} className="ShipList__Image"/>
            <div className='ShipList__Description'>
              <div className="ShipList__Name">{ship.name}</div>
              <p className="ShipList__Model">{ship.model}</p>
            </div>
          </div>
        </Link>
      })}

      <PageLoader setPageNumber={setPageNumber} pageNumber={pageNumber} />      
    </div>
  );
}

export default ShipList;
