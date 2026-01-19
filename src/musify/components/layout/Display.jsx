import react, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from './displayHome';
import PlaylistCard from '../music/PlaylistCard';
import { albumsData } from '../../assets/assets';
function display() {
    const displayref = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("playlist");
    const playlistId = isAlbum ? location.pathname.slice(-1):"";
    const bgColor =albumsData[Number(playlistId)].bgColor;
    useEffect(() => {
        if(isAlbum && albumsData[Number(playlistId)]){
            displayref.current.style.background = `linear-gradient(180deg, ${bgColor} 0%, #121212 100%)`;
        } else {
            displayref.current.style.background = '#121212';
        }
    }, [location, isAlbum, bgColor, playlistId]);
    return (
        <div ref={displayref} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                <Route path="/" element={<DisplayHome />} />
                 <Route path="/playlist/:id" element={<PlaylistCard/>} />
            </Routes>
        </div>
    );
}
export default display;