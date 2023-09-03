import React from 'react'
import ReactStars from 'react-stars'
import cardstyle from "../style/brandCard.module.css"
import ratingstyle from "../style/rating.module.css"
import useRating from '../hooks/useRating'
import ColorsBlock from './ColorsBlock'


function BrandCard({ image, website, productsite, brand, name, type, rate, price, description }) {

  const [showrate] = useRating()
 

  return (
    <div className={cardstyle.product_info}>
      <div className={cardstyle.product_basic}>
        <div className={cardstyle.product_image}>
          <img src={image} alt={name} />
        </div>
        <div className={cardstyle.product_type}>
          <a href={website}>{brand}</a>
          <div className={cardstyle.product_name}>
            <a href={productsite}><h2>{name}</h2></a>
          </div>
          <div className={ratingstyle.showrate}>
            <p>{type}</p>
            <ReactStars
              count={5}
              value={rate}
              size={30}
              color2={'#000'} readOnly />
            <span>{rate}{showrate}</span>
          </div>
          <h3>$ {price}</h3>
          <ColorsBlock />
        </div>
      </div>
      <div className={cardstyle.description}>
        <h4>Description</h4>
        <div className={cardstyle.line}></div>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default BrandCard