import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
    height: "360px",
    width:"33.33%"
  };

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,  // Hides or shows the InfoWindow
        activeMarker: {},          // Shows the active marker upon click
        selectedPlace: {}          // Shows the InfoWindow to the selected place upon a marker
      };

    onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
    // ...
  
    render() {
      return (
        <Map
          google=
          {this.props.google}
          zoom={12}
          style={mapStyles}
          initialCenter={
            {
              lat: 6.06029968425679,
              lng: 80.5681055823947
            }
          }
        >
          <Marker
            onClick={this.onMarkerClick}
            name={'AGRI IPO'}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      );
    }
  }


export default GoogleApiWrapper(
    (props) => ({
      apiKey: "AIzaSyDuzAB8Dd8C1b5u0xrqMmv_DSEl-I2nc8s"
    }
  ))(MapContainer)
