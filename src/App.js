import React, {useState} from 'react';
import './App.css';
import Home from './components/Home';
import axios from 'axios';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [ loading, setLoading ] = useState(false);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=5afbfa7836924bfdab7ec2ecd6e2dd63`

  const searchHandler = async (event) => {
    setLoading(true)
    try {
      if(event.key === "Enter"){
      const res = await axios.get(url)
        setData(res.data);
        setLocation("")
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Home 
        data={data}
       location={location} setLocation ={setLocation}
       searchHandler= {searchHandler}
       loading={loading}
      />
    </div>
  );
}

export default App;
