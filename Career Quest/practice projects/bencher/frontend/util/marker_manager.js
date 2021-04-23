export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log("time to update");
        const benchObj = {};
        benches.forEach(bench => {
            benchObj[bench.id] = bench;
        })
        
        benches
            .filter(bench => !this.markers[bench.id])
            .forEach(newBench => this.createMarkerFromBench(newBench, this.handleClick))

        Object.keys(this.markers)
            .filter(benchId => !benchesObj[benchId])
            .forEach((benchId) => this.removeMarker(this.markers[benchId]))
    }

    createMarkerFromBench(bench) {
        const marker = new google.maps.Marker({
            position: {lat: bench.lat, lng: bench.lng}
        });
        this.markers[bench.id] = marker;
        marker.setMap(this.map);
    }

    removeMarker(marker) {
        this.markers[marker.benchId].setMap(null);
        delete this.markers[marker.benchId];
    }
}