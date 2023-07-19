import React from 'react';
import './weatherBar.css';
// import { useDispatch } from 'react-redux';
// import { displayWeather, hideWeather } from './weatherSlice';

const WeatherBar = () => {
    // const dispatch = useDispatch();
        return (
            <div className="example" id="displayWeatherbar" onMouseOver={()=>{document.getElementById("displayWeatherbar").style.display = "block"}} onMouseOut={()=>{document.getElementById("displayWeatherbar").style.display = "none"}}>
                <div className="ab-headerConditions_conditions">
                    <div className="ab-condition_wrapper">
                        <div className="ab-condition">
                            <div className="ab-condition_value">0"</div>
                            <div className="ab-condition_sub">Past 24 Hrs</div>
                        </div>
                    <div className="ab-condition">
                        <div className="ab-condition_value">0"</div>
                        <div className="ab-condition_sub">Past 3 Days</div>
                    </div>
                    <div className="ab-condition">
                        <div className="ab-condition_value">0"</div>
                        <div className="ab-condition_sub">Base</div>
                    </div>
                    <div className="ab-condition">
                        <div className="ab-condition_value ab-condition_value_small">Summer</div>
                        <div className="ab-condition_sub">Conditions</div>
                    </div>
                    <div className="ab-condition ab-condition-weather ab-condition-wide">
                        <div className="ab-condition_icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="-1225.4 2083.7 105.4 72.9" className="icon Wind">
                                <g id="Group_30" data-name="Group 30" transform="translate(-1697 2077)">
                                    <path id="Path_126" data-name="Path 126" className="Wind-cls-1" d="M486.6 31.1h35.3A12.2 12.2 0 1 0 510 16.2a3.531 3.531 0 1 0 6.9 1.5 5.109 5.109 0 1 1 5 6.2h-35.3a3.8 3.8 0 0 0-4 3.5 3.828 3.828 0 0 0 4 3.7z"></path>
                                    <path id="Path_127" data-name="Path 127" className="Wind-cls-1" d="M559.7 12.1a17.37 17.37 0 0 0-17.3 17.3 16.665 16.665 0 0 0 .5 3.9 3.493 3.493 0 1 0 6.8-1.6 9.079 9.079 0 0 1-.3-2.3 10.2 10.2 0 1 1 10.2 10.2h-84a3.8 3.8 0 0 0-4 3.5 3.8 3.8 0 0 0 4 3.5h84.1a17.25 17.25 0 1 0 0-34.5z"></path>
                                    <path id="Path_128" data-name="Path 128" className="Wind-cls-1" d="M547.4 55.3h-60.7a3.8 3.8 0 0 0-4 3.5 3.8 3.8 0 0 0 4 3.5h60.9a5.1 5.1 0 1 1-5.1 6.2 3.493 3.493 0 1 0-6.8 1.6 12.2 12.2 0 0 0 24.1-2.7 12.538 12.538 0 0 0-12.4-12.1z"></path>
                                </g>
                            </svg>
                        </div>
                        <div className="ab-condition_heading">Today
                        <br />
                        Sep 28, 2022</div>
                        <div className="ab-condition_value">60°F</div>
                        <div className="ab-condition_sub">Windy</div>
                    </div>
                    <div className="ab-condition">
                        <div className="ab-condition_heading">Tomorrow
                        <br />Sep 29, 2022</div>
                        <div className="ab-condition_value">58°F</div>
                        <div className="ab-condition_sub">Windy</div>
                    </div>
                    <div className="ab-condition">
                        <div className="ab-condition_heading">Friday
                        <br />
                        Sep 30, 2022</div>
                        <div className="ab-condition_value">60°F</div>
                        <div className="ab-condition_sub">Windy</div>
                    </div>
                </div>
            </div>
            </div>
        );
}

export default WeatherBar;