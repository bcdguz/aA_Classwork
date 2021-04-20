export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }

    updateMarkers(benches) {
        console.log("time to update");
        
        for (let i = 0; i < benches.length; i++) {
            debugger
            const bench = benches[i];
            if (!this.markers[bench.id]) {
                this.createMarkerFromBench(bench);
            }
        }
    }

    createMarkerFromBench(bench) {
        const marker = new google.maps.Marker({
            position: {lat: bench.lat, lng: bench.lng}
        });
        this.markers[bench.id] = marker;
        marker.setMap(this.map);
    }
}