import React, { useState, useEffect } from 'react';
import Delete from '../Images/delete.png';
import Update from '../Images/update.png';
import axios from 'axios';
import '../Style/Admin.css';


function Admin() {

    const [image, setImage] = useState(null);
    const [userData, setUserData] = useState([]);
    const [userPostLastname, setUserPostLastname] = useState({ lastname: '' });
    const [userPostFirstname, setUserPostFirstname] = useState({ firstname: '' });
    const [userPostDescription, setUserPostDescription] = useState({ description: '' });

    useEffect(() => {

        axios.get(`http://localhost:8000/api/stars`)
            .then((res) => res.data)
            .then((data) => {
                setUserData(data);
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    const handleValueLastname = event => {
        setUserPostLastname(event.target.value);
    }

    const handleValueFirstname = event => {
        setUserPostFirstname(event.target.value);
    }

    const handleValuePostDescription = event => {
        setUserPostDescription(event.target.value);
    }

    const handleNewUser = event => {
        axios.post('http://localhost:8000/api/stars', { avatar: image, lastname: userPostLastname, firstname: userPostFirstname, description: userPostDescription })
            .then((response) => {
                console.log(response.data);
                alert(`Le profil a été crée!`)
            }, (error) => {
                console.log(error);
            });
    }

    const handleDeleteUser = ({user}) => {
        axios.delete(`http://localhost:8000/api/stars/${user.id}`, { avatar: user.image, lastname: user.lastname, firstname: user.firstname, description: user.description })
            .then((response) => {
                console.log(response.data);
                alert(`Le profil avec id: ${user.id} a été supprimé`)
            }, (error) => {
                console.log(error);
            });
    }

    const onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(URL.createObjectURL(img));
            console.log(image);
        };
    }


    return (
        <div className="admin">
            <h2>Dashboard administator</h2>
            <form>
                <div className='preview-container'>
                    <img src={image} className="preview" alt="preview avatar"></img>
                </div>
                <input className="form-avatar" type='file' name={image} onChange={onImageChange}></input>
                <div className="form-name">
                    <input type="text" placeholder="Lastname" name={userPostLastname} onChange={handleValueLastname} />
                    <input type="text" placeholder="Firstname" name={userPostFirstname} onChange={handleValueFirstname} />
                </div>
                <textarea className="form-description" name={userPostDescription} onChange={handleValuePostDescription} placeholder="Description..." />
            </form>
            <div className="create" onClick={handleNewUser}>Create new profile</div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Avatar</th>
                        <th>Lastname</th>
                        <th>Firstname</th>
                        <th>Description</th>
                        <th width="150px">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {userData.map(user => {
                        return (
                            <tr key={user.lastname}>
                                <td>{user.id}</td>
                                <td><img src={user.avatar} alt="avatar" /></td>
                                <td>{user.lastname}</td>
                                <td>{user.firstname}</td>
                                <td>{user.description}</td>
                                <td>
                                    <div className="action-delete">
                                        <img className='update-logo' src={Update} alt='delete logo' />
                                        <img className='delete-logo' src={Delete} onClick={event => handleDeleteUser({user})} alt='delete logo' />
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default Admin;