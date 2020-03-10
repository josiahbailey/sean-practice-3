import React, { useEffect, useState } from 'react';
import axios from 'axios'

import Card from './card.js'

const Container = () => {
  const [data, setData] = useState({})
  useEffect(() => {
    axios.get('https://superheroapi.com/api/515500649371911/2')
      .then(res => {
        console.log(res)
        setData(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className='container'>
      <Card />
    </div>
  );
}

export default Container;