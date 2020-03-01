import React, { Component } from 'react'
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const styles = {
    width:"45%",
    height: '68%',
    float:"left",
    position:"none",
    border:"5px",
    transform:"translate(-80px,-700px)",
    color:"black",
    borderRadius:"100%",
    textShadow:"none"
        };

  class MapContainer extends Component {
    displayMarkers = () => {
      let marker = require("../assets/backgrounds/beach-marker.png")
      let beachesArray = this.props.beaches
      return beachesArray.map((beach, index) => {
        return <Marker 
      icon={{url: marker,
        scaledSize: new window.google.maps.Size(40, 40)
      }}
      key={index} 
      id={index} 
      displayBeach={this.props.displayBeach}
      position={{
        lat: beach.lat,
        lng: beach.lng
                }}
      onClick={() => this.props.displayBeach(beach, this.props) }/>
    })
  }
  
  render () {
        let initialCenter = {
          lat:37.8591,lng:-122.4853
        }
        let center = this.props.qLatLong
        // console.log("latlongarray?", this.props.qLatLong)
        return (
          // firstBeach ? <div>Loading...</div>:
          <div className="map-container">
          <Map
          id="map-showcase"
          style={styles}
          google={this.props.google}
          zoom={11}
          initialCenter={
            initialCenter
            }
          center={center}
          >
            {/* {console.log("center", center)} */}
            {this.displayMarkers()}
          </Map>
          </div>


)
  }
}
const API_KEY = process.env.REACT_APP_GOOGLE_MAPS_KEY
export default GoogleApiWrapper({
    apiKey:API_KEY,
  })(MapContainer);
