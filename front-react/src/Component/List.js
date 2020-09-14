import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../Style/List.css';
import Detail from '../Component/Detail';

function List() {
  const [profilUser, setProfilUser] = useState([]);
  const [userId, setUserId] = useState('');

  useEffect(() => {

    axios.get(`http://localhost:8000/api/stars`)
      .then((res) => res.data)
      .then((data) => {
        setProfilUser(data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  return (
    <Router>
      <div className="container">
        <div className="list-container">
          <h3 className="h3-list">List of stars</h3>
          <div className="list">
            {profilUser.map(star => {
              return (
                <Link
                  to={`/${star.id}`}
                  className='star'
                  key={star.firstname}
                >
                  <button className="active actor" id="activate-div" onClick={(e) => setUserId(star.id)}>
                    {star.lastname} {star.firstname}
                  </button>
                </Link>
              )
            })}
          </div>
        </div>
        <div className="description-container">
          <h3>Informations</h3>
          <Switch>
            <Route exact path="/:id">
              <Detail id={userId} />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}


export default List;
