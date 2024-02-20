"use strict";
const object = {
    addresses: ["76 The Bridle Path, North York"],
    geometry: {
        type: "Polygon",
        coordinates: [
            [-79.364267264, 43.735209488],
            [-79.364334672, 43.735336069],
            [-79.366505176, 43.734880211],
            [-79.366478077, 43.734860028],
            [-79.366451437, 43.734839523],
            [-79.366425266, 43.734818705],
            [-79.366399569, 43.734797579],
            [-79.366072671, 43.734524253],
            [-79.364210898, 43.734915875],
            [-79.364189362, 43.735046848],
            [-79.364266711, 43.735208335],
            [-79.364267264, 43.735209488],
        ],
    },
    parcelId: 449217,
    id: "selected-parcel-undefined",
    style: '{"fill-color":"#00dc80","fill-outline-color":"#00dc80","fill-opacity":0.2}',
    sourceConfig: {},
    layerConfig: {
        paint: {
            "fill-color": "#00dc80",
            "fill-outline-color": "#00dc80",
            "fill-opacity": 0.2,
        },
    },
    sourceType: "geojson",
    opacity: 20,
    data: {
        type: "Feature",
        properties: {},
        geometry: {
            type: "Polygon",
            coordinates: [
                [
                    [-79.364267264, 43.735209488],
                    [-79.364334672, 43.735336069],
                    [-79.366505176, 43.734880211],
                    [-79.366478077, 43.734860028],
                    [-79.366451437, 43.734839523],
                    [-79.366425266, 43.734818705],
                    [-79.366399569, 43.734797579],
                    [-79.366072671, 43.734524253],
                    [-79.364210898, 43.734915875],
                    [-79.364189362, 43.735046848],
                    [-79.364266711, 43.735208335],
                    [-79.364267264, 43.735209488],
                ],
            ],
        },
    },
};
class Project {
    constructor(addresses, coordinates) {
        this.addresses = addresses;
        this.coordinates = coordinates;
        this.return = {
            addresses: this.addresses,
            geometry: {
                type: "Polygon",
                coordinates: this.coordinates,
            },
            parcelId: 449217,
            id: "selected-parcel-undefined",
            style: '{"fill-color":"#00dc80","fill-outline-color":"#00dc80","fill-opacity":0.2}',
            sourceConfig: {},
            layerConfig: {
                paint: {
                    "fill-color": "#00dc80",
                    "fill-outline-color": "#00dc80",
                    "fill-opacity": 0.2,
                },
            },
            sourceType: "geojson",
            opacity: 20,
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "Polygon",
                    coordinates: this.coordinates,
                },
            },
        };
        this.addresses = addresses;
        this.coordinates = coordinates;
    }
}
//# sourceMappingURL=llg.js.map