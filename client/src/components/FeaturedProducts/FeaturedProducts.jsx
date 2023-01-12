import React from 'react'
import Card from '../Card/Card'
import './FeaturedProducts.scss'
import useFetch from '../../hooks/useFetch'

const FeaturedProducts = ({type}) => {
    const {data, loading, error} = useFetch(`/products?populate=*&[filters][type][$eq]=${type}`)

    return (
        <div className="featuredProducts">
            <div className="top">
                <h1>{type} products</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos fugiat modi vero magni, officiis repellat odio maiores doloribus animi rerum quasi molestias exercitationem quam quae rem ex. Excepturi exercitationem dolor atque, nobis velit deleniti expedita officiis molestias eius magni repudiandae. Ab rem porro odit earum impedit, pariatur unde facilis numquam.</p>
            </div>
            <div className="bottom">
                {error ? "Something went wrong!" : loading ? "Loading..." : data.map(item=>(
                    <Card item={item} key={item.id}/>
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts