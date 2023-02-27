import "./Front.css";
import Calender from "./Calender/Calender.js";
import { useState } from "react";
import Navbar from "./Navbar/Navbar1";
import { useNavigate, NavLink } from "react-router-dom";
import React from "react";


const Front = () => {
    const [user, setUser] = useState("hidden");
    const [date, setDate] = useState();
    const showDate = () => { setUser("visible"); }

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div className="meeting hero-image">
                <div className="hero-text">
                    <NavLink className="sch" to="/sch_meet" > Meeting Scheduled</NavLink>
                    <p className="p"> ----or----</p>
                    <NavLink className="newMeet" to="/calender" >New Meeting</NavLink>
                </div>
            </div>
        </div>

    )
}
export default Front;