

export const ProductCard = ({product}) => {

    return (
        <div className="product-card">
            <div className="figure-area">
                <img className="img" src={product.img} alt="img" />
            </div>
            <p className="brand-name">{product.brand}</p>
            <p className="product-price">{product.price}</p>
            <p className="product-price">{product.size}</p>
        </div>
    )
}