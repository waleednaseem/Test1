import React from 'react'

export default function Details({datas}) {
    console.log(datas,'<==')
  return (
    <div className='border border-gray-500 w-52'>
        <p>name :{datas.name} </p> 
        <p>email :{datas.email} </p> 
        <p>address : {datas.address.street}</p> 
        <p>lat : {datas.address.geo.lat}</p> 
        <p>lng : {datas.address.geo.lng}</p> 
    </div>
  )
}
