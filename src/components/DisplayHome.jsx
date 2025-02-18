import React from "react";
import Navbar from "./Navbar";
import { albumsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import { songsData } from "../assets/assets";
import SongItem from "./SongItem";
function DisplayHome() {
  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((item, index) => (
            <AlbumItem
              desc={item.desc}
              key={index}
              name={item.name}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hit</h1>
        <div className="flex overflow-auto">
          {songsData.map((item, index) => (
            <SongItem
              desc={item.desc}
              key={index}
              name={item.name}
              image={item.image}
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
