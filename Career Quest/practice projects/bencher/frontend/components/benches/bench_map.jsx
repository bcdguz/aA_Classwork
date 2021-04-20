import React, { useEffect } from 'react';
import MarkerManager from '../../util/marker_manager';

const BenchMap = ({benches}) => {
    let mapNode;
    let markerManager;
    useEffect(() => {
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435}, //coords for sf
            zoom: 13
        };

        const myMap = new google.maps.Map(mapNode, mapOptions);
        markerManager = new MarkerManager(myMap);
        markerManager.updateMarkers(benches);
    }, [benches])
    
    return (
        <div ref={map => mapNode = map} id='map_container'></div>
    )
}

export default BenchMap;