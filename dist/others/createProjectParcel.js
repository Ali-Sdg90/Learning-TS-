"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProjectObject = void 0;
class Project {
    constructor(addresses, coordinates) {
        this.addresses = addresses;
        this.coordinates = coordinates;
        this.addresses = addresses;
        this.coordinates = coordinates;
    }
    generateObject() {
        return {
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
    }
}
function generateProjectObject(addresses, coordinates) {
    const project = new Project(addresses, coordinates);
    return project.generateObject();
}
exports.generateProjectObject = generateProjectObject;
//# sourceMappingURL=createProjectParcel.js.map