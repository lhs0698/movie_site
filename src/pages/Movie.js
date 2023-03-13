import React, { useState, useEffect } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9fb02562e080e36f57d6874f81a76246&targetDt=20230312` // `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9fb02562e080e36f57d6874f81a76246&targetDt=`"+today
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
