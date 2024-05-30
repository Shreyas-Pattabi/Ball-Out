import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Tester = () => {
  useEffect(() => {
    axios.get('http://localhost:8000/api/players/')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

    return (
        <div>
            <p></p>
        </div>
    );
}

export default Tester
