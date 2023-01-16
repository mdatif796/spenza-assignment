import React from 'react'
import { MapContainer, TileLayer, Popup, Circle } from 'react-leaflet'
import Data from '../Data'

const MapDiv = () => {


    return (

        <MapContainer style={{ width: '100vw', height: '94vh', boxShadow: 'grey 0px 0px 10px' }} minZoom={3} center={[0, 0]} zoom={3} scrollWheelZoom={true}>
            <TileLayer
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />

            {Data.map((val, index) => {
                let color;

                let data = val.data
                if (data > 0 && data < 500) {
                    color = '#7CB9E8'
                }
                else {
                    color = '#1058e9'
                }


                return (

                    <Circle key={index} color={color} fillOpacity={.5} center={val.coordinate} radius={val.data + 1000000 / 3}>
                        <Popup>
                                <h5 style={{letterSpacing:'.5px'}} className='pt-2 pb-2 text-center border-bottom'><i className="fa-solid fa-earth-americas"></i> Region : {val.region}</h5>
                                <h6 style={{fontSize:'.9rem'}} className='pb-2 pt-2 d-flex align-item-center'><i className="me-2 fa-solid fa-wifi"></i> Available Network : {val.data}</h6>
                                <h6 style={{fontSize:'.9rem'}} className='pb-2 d-flex align-item-center'><i style={{paddingRight:'.35rem'}} className="me-2 fa-solid fa-user"></i> Usage: ${val.data / 2 * 3}</h6>
                        </Popup>
                    </Circle>
                )
            })}



        </MapContainer>

    )
}

export default MapDiv