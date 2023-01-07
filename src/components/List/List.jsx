import React from 'react'
import Card from '../Card/Card'
import './List.scss'

const List = () => {

    const data = [
        {
            id: 1,
            img: 'https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600',
            img2: 'https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Long Sleeve Grapich T-shirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 2,
            img: 'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Coat',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 3,
            img: 'https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Skirt',
            isNew: true,
            oldPrice: 19,
            price: 12
        },
        {
            id: 4,
            img: 'https://images.pexels.com/photos/2065200/pexels-photo-2065200.jpeg?auto=compress&cs=tinysrgb&w=1600',
            title: 'Hat',
            isNew: true,
            oldPrice: 19,
            price: 12
        }
    ]

  return (
    <div className="list">{data?.map(item=>(
        <Card item={item} key={item.id}/>
    ))}</div>
  )
}

export default List