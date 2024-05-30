import React from 'react'
import axios from 'axios'
const Test = () => {
    useEffect(() => {
        axios.get('http://localhost:8000/api/players/')
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);

  return (
    <div>
      
    </div>
  )
}

export default Test
