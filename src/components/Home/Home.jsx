import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { fetchData } from '../HomeSlice'
import './Home.css'
import { addFavCards } from '../FavouriteSlice'

export default function Home() {

  const dispatch = useDispatch()

  const data = useSelector((state)=> state.home)
  
  function addFav(payload){
    dispatch(addFavCards(payload))
  }

  dispatch(fetchData())

  return (
    
    <>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      <div className='parent'>
      {
        data.map((ele, idx)=>(
          <div key={idx} className='container'>
          <div><img src={ele.Poster}/></div>
          <div className='elememts'>
            <h2>{ele.Title}</h2>
            <h4>Year : {ele.Year}</h4>
          </div>
          <button onClick={()=>addFav(ele)}>Add To favourite</button>
          </div>
        ))
      }
      </div>
      
    </>
  )
}

