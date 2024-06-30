export default function Location(props) {
    console.log(props);

    return (
        <div className="location">
            <img className="location-img" src={props.location.imageUrl}></img>
            <div className="location-content">
            <div className="location-name-map">
                <i className="map-icon fas fa-map-marker-alt"></i>
                <p>{props.location.location}</p>
                <a href={props.location.googleMapsUrl}>View on Google Maps</a>
            </div>

            <div className="location-name-time">
                <h2 className="location-title">{props.location.title}</h2>
                <h3 className="duration">{props.location.startDate} - {props.location.endDate}</h3>
            </div>
            <p className="location-desc">{props.location.description}</p>
            </div>
        </div>
    )
}