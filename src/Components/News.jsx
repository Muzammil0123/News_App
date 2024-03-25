import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
export default function News(props) {
  let REACT_API_KEY = import.meta.env.VITE_API_KEY;

  const [articles, setarticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, settotalresults] = useState(0);
  async function fetchNews() {
    let response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${REACT_API_KEY}&page=${page}&pageSize=5&category=${props.category}`
    );

    settotalresults(response.data.totalResults);
    response = response.data.articles;

    setarticles((prev) => prev.concat(response));
  }
  useEffect(() => {
    document.title = "NEWS_APP";
    props.setProgress(30);
    fetchNews();
    props.setProgress(100);
  }, []);
  useEffect(() => {
    fetchNews();
  }, [page]);
  const capitalise = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };
  const fetchMoreNews = () => {
    setPage((page) => page + 1);
  };
  return (
    <div className="container my-4">
      <h2 className="text-center my-3">
        Welcome to News App-{capitalise(props.category)}
      </h2>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreNews}
        hasMore={articles.length < totalResults}
        loader={<Spinner></Spinner>}
      >
        <div className="container">
          <div className="row">
            {articles.length > 0 ? (
              articles.map((ele) => {
                return (
                  <div key={ele.url} className="col-md-4">
                    <Card
                      urlImage={ele.urlToImage}
                      title={ele.title}
                      url={ele.url}
                      desc={ele.description}
                      time={ele.publishedAt}
                      source={ele.source.name}
                    />
                  </div>
                );
              })
            ) : (
              <h2 className="text-center">No News Currently</h2>
            )}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
