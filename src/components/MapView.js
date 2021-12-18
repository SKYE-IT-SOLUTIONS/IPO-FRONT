import React from "react";
import { Map, GoogleApiWrapper, Marker} from "google-maps-react";

function MapView() {
  const containerStyle = {
    // position:'center',  
    height: '380px',
    width:"33.33%"
  }
  const displayMarkers = () => {
    return (
      <Marker
        title={"University of Agricultural"}
        position={{
          lat: 6.06029968425679,
          lng: 80.5681055823947,
        }}
        label={"AGRI IPO"}
      />
    );
  };

  return (
    <Map
      google={window.google}
      zoom={10}
      containerStyle={containerStyle}
      initialCenter={{ lat: 6.06029968425679, lng: 80.5681055823947 }}
    >
      {displayMarkers()}
       
    </Map>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB8kU10whTTqpO0IALsXuoDhpNl_fRucYU",
})(MapView);