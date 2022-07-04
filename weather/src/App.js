import "bootstrap/dist/css/bootstrap.css";
import './App.css';
import Week from "./Components/Week/Week";
import Today from "./Components/Today/Today";
import About from "./Components/About/About";
import { useEffect, useState } from "react";



const App = () => {

  const [value, setvalue] = useState([]);
  const [number, setNumber] = useState(0);
  let componentMounted = true;

  useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=54.1838&lon=45.1749&exclude=minutely,hourly,alerts&appid=78371fdfcd2c349e0e242278c9b16920&units=metric&lang=ru`);
      if (componentMounted) {
        setvalue(await response.json())
      }
      return () => {
        componentMounted = false;
      }
    }
    fetchWeather();
  }, []);

  const handleClick = (num) => {
    // 👇️ take parameter passed from Child component

    setNumber(num);
  };

 //console.log(value.current ? (value.current) : null)

  return (
    <div >
      <Today data={value.current ? (value.current) : null}/>
      <About data={value.daily ? (value.daily[number]) : null}/>
      <div className="daily-frame">
        <div className="daily">
          По дням
        </div>
      </div>
      <div className="forecast" >
        <Week data={value.daily ? (value.daily[0]) : null} day={0} handleClick={handleClick} />
        <Week data={value.daily ? (value.daily[1]) : null} day={1} handleClick={handleClick} />
        <Week data={value.daily ? (value.daily[2]) : null} day={2} handleClick={handleClick} />
        <Week data={value.daily ? (value.daily[3]) : null} day={3} handleClick={handleClick} />
        <Week data={value.daily ? (value.daily[4]) : null} day={4} handleClick={handleClick} />
        <Week data={value.daily ? (value.daily[5]) : null} day={5} handleClick={handleClick} />
        <Week data={value.daily ? (value.daily[6]) : null} day={6} handleClick={handleClick} />
      </div>
    </div >
  )
}

export default App;
