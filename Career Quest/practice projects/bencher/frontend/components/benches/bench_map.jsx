import React, { useEffect, useState } from 'react';
import MarkerManager from '../../util/marker_manager';

const BenchMap = ({benches, updateBounds}) => {
    let mapNode;
    const [markerManager, setMarkerManager] = useState('');

    useEffect(() => {
        //Component did mount
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435}, //coords for sf
            zoom: 13
        };

        const myMap = new google.maps.Map(mapNode, mapOptions);
        myMap.addListener("bounds_changed", () => {
            const latLng = myMap.getBounds();
            const nE = latLng.getNorthEast();
            const sW = latLng.getSouthWest();
            const bounds = {
                northEast: nE,
                southWest: sW
            }
            updateBounds(bounds);
        })
        const newMarkerManager = new MarkerManager(myMap);
        setMarkerManager(newMarkerManager);
    }, [])
    
    useEffect(() => {
        //Update markers whenever new bench props are passed down
        if (markerManager.length === 0) return;
        markerManager.updateMarkers(benches);
    }, [benches])

    return (
        <div ref={map => mapNode = map} id='map_container'></div>
    )
}

export default BenchMap;