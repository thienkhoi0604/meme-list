import { useEffect, useState } from "react";
import "./Gallery.css";
import Item from "./Item/Item";

import axios from "axios";

const Gallery = ({ onClick }) => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    const url = "https://api.imgflip.com/get_memes";
    const fetchData = async () => {
      try {
        const result = await axios(url);
        if (result.data.success) {
          setGallery(result.data.data.memes);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="container-fluid">
        <div className="row gy-4 justify-content-center">
          {gallery.map((item) => {
            return <Item key={item.id} item={item} onClick={onClick} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
