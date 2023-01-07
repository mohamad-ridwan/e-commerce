import React, { useState } from 'react'
import './Product.scss'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import BalanceIcon from '@mui/icons-material/Balance'

const Product = () => {
  const [selectedImg, setSelectedImg] = useState(0)
  const [quantity, setQuantity] = useState(1)

  const image = [
    'https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600',
    'https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600'
  ]

  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={image[0]} alt="" onClick={() => setSelectedImg(0)} />
          <img src={image[1]} alt="" onClick={() => setSelectedImg(1)} />
        </div>
        <div className="mainImg">
          <img src={image[selectedImg]} alt="" />
        </div>
      </div>
      <div className="right">
        <h1>Title</h1>
        <span className='price'>$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veritatis atque, ipsa ab cum quaerat illo vero excepturi quos ratione placeat tenetur hic. Recusandae expedita corrupti tenetur voluptas exercitationem consequuntur!
        </p>
        <div className="quantity">
          <button onClick={() => setQuantity((prev) => prev === 1 ? 1 : prev - 1)}>-</button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD TO CART
        </button>
        <div className="links">
          <div className="item">
            <FavoriteBorderIcon /> ADD TO WISH LIST
          </div>
          <div className="item">
            <BalanceIcon /> ADD TO COMPARE
          </div>
        </div>
        <div className="info first-info">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt, Women, Top</span>
        </div>
        <div className="info">
          <span className='desc'>DESCRIPTION</span>
          <span className='desc'>ADDITIONAL INFORMATION</span>
          <span className='desc'>FAQ</span>
        </div>
      </div>
    </div>
  )
}

export default Product