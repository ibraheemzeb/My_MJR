import React from 'react';
// import weathericon from "../../Assets/svg/weather.svg"
// import { hideWeather} from './weatherSlice';
// import { useDispatch } from 'react-redux';
import './weather.css'

const Weather = () => {
    // const dispatch = useDispatch();
    return (
            <div className="ab-headerConditions_toolbar">
                <div className="ab-headerConditions_toolbar_left" onMouseOver={()=>{document.getElementById("displayWeatherbar").style.display = "block"}} onMouseOut={()=>{document.getElementById("displayWeatherbar").style.display = "none"}}>
                    <button className="ab-headerConditions_toggle">
                        <span style={{fontSize: '25px', fontWeight: 500, position:'relative', top:'0px'}}>12 C</span>
                        <span className="element">
                            <svg width="45px" height="40" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60.7 40" style={{enableBackground: "new 0 0 60.7 48.7"}} xmlSpace='preserve'>
                                <g id="Cloud_4">
                                    <g id="White_cloud_4">
                                        <path id="XMLID_69_" className="white" d="M47.2,40H7.9C3.5,40,0,36.5,0,32.1l0,0c0-4.3,3.5-7.9,7.9-7.9h39.4c4.3,0,7.9,3.5,7.9,7.9v0 C55.1,36.5,51.6,40,47.2,40z"></path>
                                        <circle id="XMLID_68_" className="white" cx="17.4" cy="22.8" r="9.3"></circle>
                                        <circle id="XMLID_67_" className="white" cx="34.5" cy="21.1" r="15.6"></circle>
                                        <animateTransform attributeName="transform" attributeType="XML" dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" type="translate" values="0;5;0" calcMode="linear">
                                        </animateTransform>
                                    </g>
                                </g>
                                <g id="Gray_cloud_4">
                                    <path id="XMLID_65_" className="gray" d="M54.7,22.3H33.4c-3.3,0-6-2.7-6-6v0c0-3.3,2.7-6,6-6h21.3c3.3,0,6,2.7,6,6v0 C60.7,19.6,58,22.3,54.7,22.3z"></path>
                                    <circle id="XMLID_64_" className="gray" cx="45.7" cy="10.7" r="10.7"></circle>
                                    <animateTransform attributeName="transform" attributeType="XML" dur="6s" keyTimes="0;0.5;1" repeatCount="indefinite" type="translate" values="0;-3;0" calcMode="linear">
                                    </animateTransform>
                                </g>
                                <g id="Lightning_4">
                                    <path id="XMLID_79_" className="yellow" d="M43.6,22.7c-0.2,0.6-0.4,1.3-0.6,1.9c-0.2,0.6-0.4,1.2-0.7,1.8c-0.4,1.2-0.9,2.4-1.5,3.5
                                    c-1,2.3-2.2,4.6-3.4,6.8l-1.7-2.9c3.2-0.1,6.3-0.1,9.5,0l3,0.1l-1.3,2.5c-1.1,2.1-2.2,4.2-3.5,6.2c-0.6,1-1.3,2-2,3
                                    c-0.7,1-1.4,2-2.2,2.9c0.2-1.2,0.5-2.4,0.8-3.5c0.3-1.2,0.6-2.3,1-3.4c0.7-2.3,1.5-4.5,2.4-6.7l1.7,2.7c-3.2,0.1-6.3,0.2-9.5,0
                                    l-3.4-0.1l1.8-2.8c1.4-2.1,2.8-4.2,4.3-6.2c0.8-1,1.6-2,2.4-3c0.4-0.5,0.8-1,1.3-1.5C42.7,23.7,43.1,23.2,43.6,22.7z"></path>
                                    <animate attributeType="CSS" attributeName="opacity" dur="1.5s" keyTimes="0;0.5;1" repeatCount="indefinite" values="1;0;1" calcMode="linear"></animate>
                                </g>
                            </svg>
                        </span>


                        <span className="ab-util_srOnly">Toggle conditions</span>


                    </button>
                    {/* <div className="example" id="displayWeatherbar" onMouseOver={()=>{dispatch(displayWeather())}} onMouseOut={()=>{dispatch(hideWeather())}} > */}
                {/* <div className="ab-headerConditions_conditions">
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
                            </svg></div>
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
                </div> */}
            {/* </div> */}
            {/* </div> */}
                </div>
            </div>
        );
}

export default Weather;