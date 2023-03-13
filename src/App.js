import React, { useEffect, useState } from "react";

import "./App.css";

function App() {

  
  
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=9fb02562e080e36f57d6874f81a76246&targetDt=20230312`
      )
    ).json();
    setMovies(json.boxOfficeResult.dailyBoxOfficeList);
  };

  useEffect(() => {
    getMovies();
  },[]);

  console.log(movies)

  return (
    <div className="App">
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
}

export default App;
