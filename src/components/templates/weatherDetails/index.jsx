import React, { useState } from 'react';
import classes from './module.scss';

const WeatherDetails = (props) => {
    //const [celsius, setCelsius] = useState('');
    //const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;
    
    return (
        <div className={classes.wrapper}>
            {props.error && <small className="small">Please enter a valid city.</small>}

            {props.isLoading && <div className={classes.loader}>Loading...</div>}

            {props.responseObj.cod === 200 ? 
                <div className="forcast-deatils">
                    <h2 className="city-name mb-3">{props.responseObj.name}</h2>
                    <p className="mb-3 text-center">
                        <span className="city-temp">{Math.round(props.responseObj.main.temp)}&deg;F</span>
                        <sub className="sub-txt">{props.responseObj.weather[0].description}</sub>
                    </p>

                    <div className="des-txt mb-3">
                        <span>Humidity</span>
                        <span>{props.responseObj.main.humidity} %</span>
                    </div>

                    <div className="des-txt mb-3">
                        <span>Minimum temp</span>
                        <span>{props.responseObj.main.temp_min}&deg; F</span>
                    </div>

                    <div className="des-txt mb-3">
                        <span>Max temp</span>
                        <span>{props.responseObj.main.temp_max}&deg; F</span>
                    </div>

                    <div className="des-txt mb-3">
                        <span>Wind speed</span>
                        <span>{props.responseObj.wind.speed} km/h</span>
                    </div>
                </div>

                


            : null
            }
        </div>
    )
}

export default WeatherDetails;