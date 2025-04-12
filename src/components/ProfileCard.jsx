import React from "react"
import "./css/ProfileCard.css"
import emailIcon from "./assets/mail.svg"
import phoneIcon from "./assets/phone.svg"
import calenderIcon from "./assets/calendar.svg"
import nationalityIcon from "./assets/nationality.svg"

function ProfileCard ({user}) {
    const {name, location, email, dob, phone, picture} = user

    const birthday = dob.date.substring(0, 10)

    return (
        <div className="card">
            <div className="cardTitle">
                <img src={picture.medium} alt="Profile Photo Not Found" />
                <h2>{name.first} {name.last}</h2>
            </div>
            <div className="cardInfo">
                <div>
                    <img src={emailIcon} alt="Email Icon Not Found" />
                    <p>{email}</p>
                </div>
                <div>
                    <img src={phoneIcon} alt="Phone Icon Not Found" />
                    <p>{phone}</p>
                </div>
                <div>
                    <img src={calenderIcon} alt="Calender Icon Not Found" />
                    <p>{birthday}</p>
                </div>
                <div>
                    <img src={nationalityIcon} alt="Nationality Icon Not Found" />
                    <p>{location.country}</p>
                </div>
            </div>
        </div>     
    )
}

export default ProfileCard