import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Style/Detail.css';


function Detail(id) {
    console.log(id)

    const [profilData, setProfilData] = useState([]);

    useEffect(() => {

        axios.get(`http://localhost:8000/api/stars/${id.id}`)
            .then((res) => res.data)
            .then((data) => {
                setProfilData(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [id.id])

    return (
        <div className="Detail">
            <div className='identity'>
                <img src={profilData.avatar} alt="avatarr" className="avatar"></img>
                <div className="name">
                    <h2 className="lastname">{profilData.lastname}</h2>
                    <h4 className="firstname">{profilData.firstname}</h4>
                </div>
            </div>
            <div className="description">
                <p className="actor-description">{profilData.description}</p>
            </div>
        </div>
    );
}

export default Detail;