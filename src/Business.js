const Business = (props) => {
    const {
        name,
        address,
        city,
        state,
        zipcode,
        category,
        rating,
        reviewCount,
        imageUrl,
    } = props;
    return ( 
        <div className="Business">
        <img src={imageUrl} alt={name} />
        <h2>{name}</h2>
        <p>
          {address}
          {city}, {state}, {zipcode}
        </p>
        <p>Category: {category}</p>
        <p>
          Rating: {rating} ({reviewCount} reviews)
        </p>
      </div>
     );
}
 
export default Business;