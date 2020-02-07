import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './index.css';


class Home extends React.Component {
  state = {
    isloading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: { 
        data :{ movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({movies, isloading : false})
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isloading, movies } = this.state;
    return (
      <section className="container">
        {isloading ? (
          <div className="loader">
              <span className="loader_text">Loading...</span>
          </div>
        ) : ( 
          <div className="movies">
           {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres} 
            />
            ))}
          </div>
          )}
      </section>
    );
  }
}



export default Home;
 