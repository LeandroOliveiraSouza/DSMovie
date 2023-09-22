import "./styles.css";
import { MoviePage } from "types/movies";
import { ReactComponent as Arrow } from "assets/arrow.svg";

type Props = {
  page: MoviePage;
  onChange: (newPageNumber: number) => void;
};

export default function Pagination({ page, onChange }: Props) {
  return (
    <div className="dsmovie-pagination-container">
      <div className="dsmovie-pagination-box">
        <button
          className="dsmovie-pagination-button"
          disabled={page.first}
          onClick={() => onChange(page.number - 1)}
        >
          <Arrow />
        </button>
        <p>{`${page.number + 1} de ${page.totalPages}`}</p>
        <button
          className="dsmovie-pagination-button"
          disabled={page.last}
          onClick={() => onChange(page.number + 1)}
        >
          <Arrow className="dsmovie-flip-horizontal" />
        </button>
      </div>
    </div>
  );
}
