import React, { useState, useEffect } from "react";

const Movie = () => {
  // 영화 api 일일 박스오피스
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    // 일별 박스오피스 api 날짜, yymmdd 형식
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate() - 1;
    const toDate =
      year +
      ("00" + month.toString()).slice(-2) +
      ("00" + day.toString()).slice(-2);

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
      {movies.map((movie, index) => (
        <div key={index}>
          <div>
            <div>영화 제목 : {movie.movieNm}</div>
            <div>개봉일 : ({movie.openDt})</div>
            <div>누적 관객 수 : {movie.audiAcc}명</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Movie;
