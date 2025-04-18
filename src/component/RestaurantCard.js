const RestaurantCard = (props) =>{
    //console.log(props);
    const {resData} = props;
    //cloudinaryImageId,costForTwo,sla.deliveryTime
    const {name,avgRating,cuisines} = resData;
    // console.log({props})
    return(
        <div className="res-card">
            <img alt="pizza img" 
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/z0c4xpovma1qtmu4tlls"/>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(",")}</h4>
            <h4>{resData.info.avgRating} Stars</h4>
            <h4>{resData.info.sla.deliveryTime} minutes</h4>
        </div>
    );
};

export default RestaurantCard;