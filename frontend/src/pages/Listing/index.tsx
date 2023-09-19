import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";

export default function Listing() {
  return (
    <>
      <Pagination />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <MovieCard />
          </div>
          <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
