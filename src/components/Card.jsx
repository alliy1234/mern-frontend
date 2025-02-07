import React from 'react'

const Card = ({item}) => {
  return (
    <>
    <div className="card bg-base-100 w-96 shadow-xl hover:scale-105 duration-200 mb-12">
  <figure>
    <img
      src={item.image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {item.name}
      <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{item.price}</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div></>
  )
}

export default Card
