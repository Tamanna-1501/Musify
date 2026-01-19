import React from 'react';
import Navbar from './Navbar';
import { albumsData } from '../../assets/assets';
import { songsData } from '../../assets/assets';
import Playlist from '../../pages/Playlist';
 const DisplayHome = () => {
    return (
       <>
       <Navbar/>
       <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
            {albumsData.map((items,index)=>(<Playlist key={index} image={items.image} name={items.name} desc={items.desc} id={items.id}/>))}
        </div>
       </div>
       <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Today's Biggest Hits</h1>
        <div className='flex overflow-auto'>
            {songsData.map((items,index)=>(<Playlist key={index} image={items.image} name={items.name} desc={items.desc} id={items.id}/>))}
        </div>
       </div>
       </>
    )
}
export default DisplayHome;