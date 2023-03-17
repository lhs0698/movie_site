import React, { useState, useEffect } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() - 1 ;

    const toDate = year+(("00"+month.toString()).slice(-2))+(("00"+day.toString()).slice(-2));
    // console.log(format)
    const json = await (
      await fetch( 
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9fb02562e080e36f57d6874f81a76246&targetDt=${toDate}` 
      )
    ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
  };

  useEffect(() => {
    getMovies();
  }, []);
  
  return (
    <div>
      <div>
        {movies.map((movie, index) => (
          <div key={index}>
            <div>영화 제목 : {movie.movieNm}</div>
            <div>개봉일 : {movie.openDt}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
