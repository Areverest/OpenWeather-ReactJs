import './About.css'

import Vector from '../../assets/Vector.svg'
import Sunup from '../../assets/Sunup.svg'
import Sundown from '../../assets/Sundown.svg'



function About(data) {

    // const [search, setsearch] = useState("Saransk");
    // const [see, setsee] = useState([]);
    // let componentMounted = true;

    // useEffect(() => {
    //     const fetchWeather = async () => {
    //         const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search},Ru&appid=78371fdfcd2c349e0e242278c9b16920&units=metric&lang=ru`);
    //         if (componentMounted) {
    //             setsee(await response.json())
    //         }
    //         return () => {
    //             componentMounted = false;
    //         }
    //     }
    //     fetchWeather();
    // }, []);

    var sunrise = data?.data?.sunrise; // unix timestamp in seconds

    var t = new Date(sunrise * 1000);
    var sun_r =
        ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2);

    var sunset = data?.data?.sunset; // unix timestamp in seconds

    var t = new Date(sunset * 1000);
    var sun_s =
        ("0" + t.getHours()).slice(-2) + ":" + ("0" + t.getMinutes()).slice(-2);


    return (
        <div>
            
            <div className="ttex">
                Подробности
            </div>
            <div className='border'></div>
            <div className="borderr"></div>
            <div className="about">
                <div className="feels">
                    По ощущениям
                </div>
                <div className="like">
                    {data?.data?.feels_like?.day.toFixed()}°
                </div>
            </div>
            <div className="pressure">
                <div className='pres'>
                    Давление
                </div>
                <div className="press">
                    {(data?.data?.pressure/1.333).toFixed(2)} мм
                </div>
            </div>
            <div className="second">
                <div className="humidity">
                    Влажность
                </div>
                <div className="humi">
                    {data?.data?.humidity}%
                </div>
            </div>
            <div className="four">
                <div className="fourtext">
                    Ветер
                </div>
                <div className="wind">
                    <div className="windd">
                        <img src={Vector} alt='' />
                        {data?.data?.wind_speed.toFixed(1)} м/c
                    </div>
                </div>
            </div>
            <div className="visible">
                <div className="five">
                    Вероятность осадков
                </div>
                <div className='visibly'>
                    {data?.data?.pop *100} %
                    
                </div>

            </div>
            <div className="sungroup">

                <div className="sunup">
                    Восход
                </div>
                <div className="frame">
                    <div className="time1">
                        {sun_r}
                    </div>
                    <div className="sunnup">
                        <img src={Sunup} />
                    </div>
                </div>


            </div>

            <div className="sunngroup">

                <div className="sundown">
                    Закат
                </div>
                <div className="frame1">
                    <div className="time2">
                        {sun_s}
                    </div>
                    <div className="sunndown">
                        <img src={Sundown} />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default About