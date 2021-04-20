import React, { useEffect } from 'react';

const BenchMap = (props) => {
    let mapNode;

    useEffect(() => {
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435}, //coords for sf
            zoom: 13
        };

        const myMap = new google.maps.Map(mapNode, mapOptions)
    },[])

    return (
        <div ref={map => mapNode = map} id='map_container'></div>
    )
}

export default BenchMap;