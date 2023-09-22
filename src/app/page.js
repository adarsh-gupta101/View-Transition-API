"use client";

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

// get 100 posters from tmdb api, key is ad102db3ff4a94fb2915575fab133659

export default function Home() {
  let [state, setState] = useState([]);

  useEffect(() => {
    // tmdb
    axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=key&language=en-US&page=2`
    ).then((res) => {
      setState(res.data.results);
      console.log(res.data.results)
    });
  }, []);
  return (
    <div className="flex flex-row flex-wrap h-screen items-center justify-center bg-gradient-to-b from-blue-100 to-blue-500 min-h-fit">
    {
      state.map((item, index) => {
        return(
          <div key={index} className="m-1">
            <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} width={200} height={200} alt={index}/>
          </div>

        )
      })
    }
    </div>
  );
}
