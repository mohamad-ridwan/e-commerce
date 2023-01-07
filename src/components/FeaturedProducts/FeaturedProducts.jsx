import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'

const FeaturedProducts = ({type}) => {

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
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat modi vero magni, officiis repellat odio maiores doloribus animi rerum quasi molestias exercitationem quam quae rem ex. Excepturi exercitationem dolor atque, nobis velit deleniti expedita officiis molestias eius magni repudiandae. Ab rem porro odit earum impedit, pariatur unde facilis numquam.</p>
            </div>
            <div className="bottom">
                {data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts