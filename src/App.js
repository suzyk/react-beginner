import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";
import Movie from "./Movie";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();

    /** old way 
    fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`)
    .then((response) => response.json())
    .then((json) => {
      setMovies(json.data.movies);
      setLoading(false);
    })
    */
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              medium_cover_image={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/*
function Input({coinName, coinPrice = 0}) {
  const [budget, setBudget] = useState(0);
  const onChange =(event) => {
    setBudget(event.target.value);
  }
  return (
    <>
        <input value = {budget} onChange={onChange} type='number' placeholder='Put dollar amount'></input>
  
      <h2>{budget === 0 ? "Set the Budget" : `${budget/coinPrice} of ${coinName} can be purchased`}</h2>
    </>
  );
}
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedName, setSelectedName] = useState("");
  const [selectedPrice, setSelectedPrice] = useState(0);
  const onSelect = (event) => {
    const selectedOption = event.target.value.split(",");
    setSelectedName(selectedOption[0]);
    setSelectedPrice(selectedOption[1]);
  }
  
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setLoading(false);
        setCoins(json);
        setSelectedPrice(json[0].quotes.USD.price);
        setSelectedName(json[0].name);
      })
  }, [])
  useEffect(()=>{
    
  }, [selectedName]);
  return (
    <div className='App'>
      <h1>Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (<strong>Loading...</strong>) :
      (<select onChange={onSelect}>
          {coins.map((coin) => (
              <option key={coin.id} value={[coin.name, coin.quotes.USD.price]}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</option>
          ))}
      </select>
      )}
      
      <hr/>
      <Input coinName={selectedName} coinPrice={selectedPrice}/>
    </div>
  );
}*/

/*
function App() {
  const [keyword, setKeyword] = useState("");
  const onChange = (event) =>  setKeyword(event.target.value);
  useEffect(()=>{
    if(keyword.length > 2){
      console.log("I run only when keyword changes.");
    }
    
  }, [keyword]);
  return ( 
    <div>
      <input type="text" value = {keyword} onChange={onChange} placeholder="Search here"></input>
      <h1 className={styles.title}>Welcome back!</h1>
      <Button text="Something"></Button>
    </div>
  );
}
*/

export default App;
