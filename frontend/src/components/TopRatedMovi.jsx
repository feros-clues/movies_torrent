import React, { useEffect, useState } from "react";
import "./TopRated.css";
import { AnimatePresence, motion } from "framer-motion";
const TopRatedMovi = () => {
  const [toprated, setTopRated] = useState([]);
  const [cinema, setCinema] = useState([]);
  const [type, setType] = useState("top_rated");
  const [genre, setGenre] = useState(0);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${type}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setTopRated(data.results);
        setCinema(data.results);
        setFiltered(data.results);
      });
  }, []);
  //  console.log(toprated);
  console.log("cinema", cinema);

  // console.log(data)

  useEffect(() => {
    if (genre === 0) {
      setFiltered(cinema);
      return;
    }
    const fm = cinema.filter((values) => values.genre_ids.includes(genre));
    setFiltered(fm);
  }, [genre]);
  // console.log(genre);

  console.log("filtered", filtered);

  // useEffect(() => {});

  return (
    <>
      <motion.div
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
            damping: 60,
          },
          y: "0vw",
        }}
        initial={{ y: -1000 }}
        exit={{ opacity: 0 }}
        className="filter-container"
      >
        <div className="filter-container">
          <button
            className={genre === 0 ? "active" : ""}
            onClick={() => setGenre(0)}
          >
            All
          </button>
          <button
            className={genre === 35 ? "active" : ""}
            onClick={() => setGenre(35)}
          >
            Comedy
          </button>
          <button
            className={genre === 28 ? "active" : ""}
            onClick={() => setGenre(28)}
          >
            Action
          </button>
        </div>
      </motion.div>

      {/* <motion.div
        animate={{ opacity: 1, transition: { duration: 1.3 }, y: "0vh" }}
        initial={{ opacity: 0, y: -1000 }} */}
      <motion.div
      
        layout
        animate={{
          opacity: 1,
          transition: {
            duration: 2,
            damping: 60,
          },
          y: "0vw",
        }}
        initial={{ y: -1000 }}
        exit={{ opacity: 0, transition: { duration: 2 } }}
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          justifyContent: "space-around",
          margin: "1em",
          zIndex: "2",
        }}
      >
        {" "}
        <AnimatePresence>
          {filtered.map((movie, id) => {
            return (
              <>
                <div className="poster">
                  <div>
                    <div
                      style={{
                        // backgroundColor: "white",
                        // padding: "2em",
                        // margin: "2em",
                        minWidth: "11em",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        margin: "1.7em",
                        //   backgroundColor: "white",
                        // boxShadow: "3px 2px gray",
                      }}
                    >
                      <div>
                        <img
                          src={`http://image.tmdb.org/t/p/original${
                            movie ? movie.poster_path : ""
                          }`}
                          //   height="25rem"
                          width="200em"
                        ></img>
                      </div>

                      {/* <div>
                       <h5 style={{ color: "rgb(255,250,0)" }}>
                         {movie.title}
                       </h5>
                     </div> */}

                      <div
                        style={{
                          margin: "auto",
                          //   display: "flex",
                          //   flexDirection: "column",
                          //   alignItems: "center",

                          width: "11em",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <h5
                          style={{
                            color: "rgb(255,250,0)",
                            margn: "auto",
                          }}
                        >
                          {movie.title}
                        </h5>
                        <div>
                          <span style={{ color: "yellow" }}>
                            IMDB:&nbsp;-&nbsp;
                            {movie.vote_average}/10
                          </span>
                        </div>
                        <div style={{ color: "white" }}>
                          Vote Count: &nbsp;&nbsp;
                          {movie.vote_count}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default TopRatedMovi;
