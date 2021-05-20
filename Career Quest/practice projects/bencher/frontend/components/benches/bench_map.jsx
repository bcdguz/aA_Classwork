import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

const BenchMap = ({benches, updateFilter, history}) => {
    let mapNode;
    const [markerManager, setMarkerManager] = useState('');
    const getCoordsObj = latLng => ({
        lat: latLng.lat(),
        lng: latLng.lng()
    });

    useEffect(() => {
        //Component did mount
        const mapOptions = {
            center: {lat: 37.7758, lng: -122.435}, //coords for sf
            zoom: 13
        };

        const myMap = new google.maps.Map(mapNode, mapOptions);
        myMap.addListener("idle", () => {
            const latLng = myMap.getBounds();
            const nE = latLng.getNorthEast().toJSON();
            const sW = latLng.getSouthWest().toJSON();
            const bounds = {
                northEast: nE,
                southWest: sW
            }
            updateFilter('bounds', bounds);
        })
        myMap.addListener('click', (event) => {
            const coords = getCoordsObj(event.latLng);
            handleClick(coords);
        })
        
        const newMarkerManager = new MarkerManager(myMap);
        setMarkerManager(newMarkerManager);
    }, [])
    
    useEffect(() => {
        //Update markers whenever new bench props are passed down
        if (markerManager.length === 0) return;
        markerManager.updateMarkers(benches);
    }, [benches])

    const handleClick = (coords) => {
        history.push({
            pathname: "benches/new",
            search: `lat=${coords.lat}&lng=${coords.lng}`
        });
    }

    return (
        <div ref={map => mapNode = map} id='map_container'></div>
    )
}

export default withRouter(BenchMap);