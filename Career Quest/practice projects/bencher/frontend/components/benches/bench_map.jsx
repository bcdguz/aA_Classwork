import React, { useEffect, useState } from 'react';
import MarkerManager from '../../util/marker_manager';

const BenchMap = ({benches}) => {
    let mapNode;
    const [markerManager, setMarkerManager] = useState('');
    useEffect(() => {
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435}, //coords for sf
            zoom: 13
        };

        const myMap = new google.maps.Map(mapNode, mapOptions);
        const newMarkerManager = new MarkerManager(myMap);
        setMarkerManager(newMarkerManager);
    }, [])
    
    useEffect(() => {
        if (markerManager.length === 0) return;
        markerManager.updateMarkers(benches);
    }, [benches])

    return (
        <div ref={map => mapNode = map} id='map_container'></div>
    )
}

export default BenchMap;