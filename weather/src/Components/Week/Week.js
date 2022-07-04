import './Week.css'



const Week = (data, day, handleClick) => {

    function Child(event) {

        data.handleClick(data?.day)
        event.preventDefault();
        document.querySelectorAll("div.day-box").forEach((element) => {
            element.classList.remove("bg");
            element.classList.remove("change");
        });
        event.currentTarget.classList.add("bg");
    }


    const Day = (unix) => {
        var date = new Date(unix * 1000);
        var day = date.getDay();
        let dayName
        switch (day) {
            case 1:
                dayName = "Пн";
                break;
            case 2:
                dayName = "Вт";
                break;
            case 3:
                dayName = "Ср";
                break;
            case 4:
                dayName = "Чт";
                break;
            case 5:
                dayName = "Пт";
                break;
            case 6:
                dayName = "Сб";
                break;
            case 0:
                dayName = "Вс";
                break;
            default:
                dayName = "NaN";
                break;
        }
        dayName += " " + date.getDate()
        return dayName;
    }


    const getDayName = (day, unix) => {
        let dayName
        switch (day) {
            case 0:
                dayName = "Сегодня";
                break;
            case 1:
                dayName = "Завтра";
                break;
            default:
                dayName = Day(unix);
                break;
        }
        return dayName
    }



    let icon = (data?.data?.weather[0]?.icon)
    return (
        <form>
            <div className="day-box change" onClick={event => Child(event, data.day)} >
                <div className="day-name">
                    {getDayName(data.day, data?.data?.dt + 10800)}
                </div>
                <div className="ico">
                    <img width={90} height={90} src={`https://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                </div>
                <div className="temp-frame">
                    <div className="d-n-frame">
                        <div className="day-temp">
                            {data?.data?.temp?.day.toFixed()}°
                        </div>
                        <div className="night-temp">
                            {data?.data?.temp?.night.toFixed()}°
                        </div>
                    </div>
                </div>

            </div>
        </form>
    )
}


export default Week