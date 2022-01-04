import React from "react";
import { Map, GoogleApiWrapper, Marker} from "google-maps-react";
import styled from "styled-components";

const Map1=styled(Map)`

`;

function MapView() {
  const containerStyle = {
    width: "33.33%",
   height: "60%",
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
    <Map1
      google={window.google}
      zoom={10}
      containerStyle={containerStyle}
      initialCenter={{ lat: 6.06029968425679, lng: 80.5681055823947 }}
    >
      {displayMarkers()}
       
    </Map1>
  );
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyB8kU10whTTqpO0IALsXuoDhpNl_fRucYU",
})(MapView);
