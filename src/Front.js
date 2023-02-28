import "./Front.css";
import { useState } from "react";
import Navbar from "./Navbar/Navbar1";
import { useNavigate, NavLink } from "react-router-dom";
import React from "react";
const Front = (prop) => {
    const [user, setUser] = useState("hidden");
    const [date, setDate] = useState();
    const [navData, setNavData] = useState();
    const showDate = () => { setUser("visible"); }
    // setNavData(prop.data);

    return (
        <div>
            <div>
                <Navbar data={prop.data} />
            </div>
            <div className="meeting hero-image">
                <div className="hero-text">
                    <NavLink className="sch" to="/sch_meet" > Meeting Scheduled</NavLink>
                    <p className="p"> ----or----</p>
                    <NavLink className="newMeet" to="/calender" >New Meeting</NavLink>
                </div>
            </div>
            {prop.data}
            {/* {navData} */}
        </div>

    )
}
export default Front;