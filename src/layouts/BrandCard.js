import React from 'react'
import brandCard from '../style/brandCard.module.css'
import useRating from '../hooks/useRating'


function BrandCard({ name, img, price, description, brand, rating, colors, type, prodLink, webLink }) {

const [styleRating, ratingProcent] = useRating(rating)
    return (
        <div className={brandCard.wrapper}>
            <div className={brandCard.image}>
                <img className={brandCard.img} src={img} alt={type} />
            </div>
            <div className={brandCard.brand}>
                <a href={webLink}>{brand}</a>
                </div>
            <h1 className={brandCard.title}>
                <a href={prodLink}>{name}</a>
                </h1>
            <div className={brandCard.wraptprtg}>
                <div className={brandCard.type}>{type}</div>
                <div className={brandCard.rating} >
                    <div className={brandCard.ratingOuter} style={{  width: ratingProcent }}></div>
                    <div className={brandCard.ratingInner} style={{ width: ratingProcent }}></div>
                    <p>{rating}</p>
                </div>
                <div className={brandCard.noReview} style={ styleRating }>
                <p>the product has no reviews</p>
                </div>
            </div>
            <p className={brandCard.price}>{price}</p>
            <div className={brandCard.wrapcolors}>
                <div className={brandCard.color}>{colors}</div>
            </div>
            <div className={brandCard.wrapDescr}>
                <h3 className={brandCard.descrTitle}>Description</h3>
                <p className={brandCard.descr}>{description}</p>
            </div>

        </div>
    )
}

export default BrandCard