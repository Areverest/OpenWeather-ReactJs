import './Today.css';

const Today = (data) => {


    function capitalize(s)
    {
        return s && s[0].toUpperCase() + s.slice(1);
    }

    let icon = (data?.data?.weather[0]?.icon)

    return (

        <div >
            <div className='Today'>
                Саранск
            </div>
            <div className='Frame2'>
                <div className="jpg">
                    <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
                </div>
                <div className='Temp'>
                    {data?.data?.temp.toFixed()}°
                </div>
            </div>
            <div className='Sunny'>
                {capitalize(data?.data?.weather[0].description)}
            </div>


        </div>
    )
}

export default Today