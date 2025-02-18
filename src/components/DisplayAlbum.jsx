import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { usePlayerContext } from "../context/PlayerContext";

function DisplayAlbum() {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = usePlayerContext();
  return (
    <>
      <Navbar />
      <div className="mt-4 flex gap-8 flex-col sm:flex-row md:items-end">
        <img className="w-48 rounded" src={albumData.image} alt="" />
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold mb-4 md:text md:text-7xl">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <p className="mt-1 hidden gap-3 items-center sm:flex text-nowrap">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt=""
            />
            <b className="md:block hidden">Spotify •</b>
            9289102 likes • <b>50 songs,</b>
            about 2 hr 47 min
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p className="md:block hidden">Album</p>
        <p className="hidden md:block text-center">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="grid grid-cols-2 md:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white text-nowrap">
            <b className="mr-4">{index + 1}</b>
            <img className="inline w-10 mr-5 " src={item.image} alt="" />
            {item.name}
          </p>
          <p className="text-[15px] font-semibold rext-right md:block hidden">
            {albumData.name}
          </p>
          <p className="text-[15px] hidden md:block text-center">5 days ago</p>
          <p className="text-center">{item.duration}</p>
        </div>
      ))}
    </>
  );
}

export default DisplayAlbum;
