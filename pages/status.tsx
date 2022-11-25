/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import axios from "axios";

interface spotify {
  item: {
    external_urls: {
      spotify: string;
    };
    name: string;
    album: {
      images: {
        url: string;
      }[];
    };
  };
}
function Status() {
  const [spotifyData, setSpotifyData] = useState<spotify | null>();
  useEffect(() => {
    axios
      .get("https://api.spotify.com/v1/me/player/currently-playing", {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SPOTIFY_BEARER}`,
        },
      })
      .then((Response) => {
        if (Response.status === 200) {
          setSpotifyData(Response.data);
        } else {
          setSpotifyData(null);
        }
      });
  }, []);

  return (
    <>
      <Header page="Status" />
      <div className="container h-screen flex justify-center items-center mx-auto lg:w-1/2 px-4 py-16">
        <div className="p-4 w-[400px] border-2 rounded space-y-4">
          <div className="flex items-center">
            <div>
              <img
                src="https://avatars.githubusercontent.com/u/67946056?v=4"
                alt="spotify banner"
                className="w-16 h-16 rounded-md shadow-sm"
              />
            </div>
            <div className="pl-4">Devpenzil is Online</div>
          </div>
          <hr />
          {spotifyData && (
            <div>
              <a href={spotifyData.item.external_urls.spotify} target="blank">
                <div className="flex items-center">
                  <div>
                    <img
                      src={spotifyData?.item?.album?.images[0]?.url}
                      alt="spotify banner"
                      className="w-16 h-16 rounded-md shadow-sm"
                    />
                  </div>
                  <div className="pl-4">
                    <p>{spotifyData?.item?.name}</p>
                    <p className="text-xs font-semibold">
                      currently playing on Spotify
                    </p>
                  </div>
                </div>
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Status;
