import React from 'react';
import './PageLoader.scss'

const PageLoader = ({pageNumber, setPageNumber}) => {

  const pageHandler = (num) => {
    if (num === 1 && pageNumber < 4) {
      setPageNumber(pageNumber + num)
    } else if (num === -1 && pageNumber > 1) {
      setPageNumber(pageNumber + num)
    } else {
      console.log('You are on the first or last page')
    }
  }

  return <div className='PageLoader'>
    <button onClick={() => pageHandler(-1)}>Previous Page</button>
    <p>{pageNumber}</p>
    <button onClick={() => pageHandler(1)}>Next Page</button>
  </div>
}

export default PageLoader;