const RestaurantCard = (props) =>{
    const {resData} = props;
    const {resName,avgRating} = resData;
     //console.log({props})
    return(
        <div className="res-card">
            <img alt="pizza img" 
            className="res-logo"
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/z0c4xpovma1qtmu4tlls"/>
            <h3>{resName}</h3>
            <h4>Biryani, North Indian, Thai</h4>
            <h4>{avgRating}stars</h4>
            <h4>38 minutes</h4>
        </div>
    );
};

export default RestaurantCard;