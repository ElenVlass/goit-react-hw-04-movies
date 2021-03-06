import { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./MovieDetails.module.scss";
import defaultStar from "../../images/star.png";

class MovieDetails extends Component {
  static defaultProps = {
    profile_path: defaultStar,
  };
  static propTypes = {
    title: PropTypes.string,
    poster: PropTypes.string,
    overview: PropTypes.string,
    score: PropTypes.number,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  };
  render() {
    const { title, poster, overview, score, genres, onClick, tagline } =
      this.props;
    return (
      <>
        <button type="button" onClick={onClick} className={styles.GoBackBtn}>
          <span role="img" aria-label="Go back">
            🔙{" "}
          </span>
          Go back
        </button>
        <div className={styles.card}>
          <div className={styles.MovieCard_thumb}>
            {poster && (
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster}`}
                alt={title}
              />
            )}
          </div>
          <div className={styles.MovieCard_meta}>
            <h2>{title}</h2>
            <p>{tagline}</p>
            <p>User Score: {score}</p>
            <p>Overview: {overview}</p>
            <ul>
              Genres:{" "}
              {genres?.map(({ id, name }) => (
                <li key={id}> {name} </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(MovieDetails);
