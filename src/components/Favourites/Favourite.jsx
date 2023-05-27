import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../Home/Home.css'
import { removeCards } from '../FavouriteSlice'

export default function Favourite() {

  const data = useSelector((state)=>state.cards)

  const dispatch = useDispatch()

  return (
    // <pre>{JSON.stringify(data, null, 2)}</pre>
    <>
      <div className='parent'>
      {
        data.cards.map((ele, idx)=>(
          <div key={idx} className='container'>
          <div><img src={ele.Poster}/></div>
          <div className='elememts'>
            <h2>{ele.Title}</h2>
            <h4>Year : {ele.Year}</h4>
          </div>
          <button onClick={()=>dispatch(removeCards(idx))}>Remove </button>
          </div>
        ))
      }
      </div>
    </> 
  )
}
