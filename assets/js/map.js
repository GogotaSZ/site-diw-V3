class MapBox {
    constructor(center) {
        mapboxgl.accessToken = 'pk.eyJ1IjoiZ2hkc3QiLCJhIjoiY2xwY3p5NmlqMHFzbjJpb3d2czBnMmExZyJ9.6vTNQ-mzY3KmQVXebtq7qg';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v12',
            center: center,
            zoom: 9
        });

    }
    addPoint(feature) {
        let popup = new mapboxgl.Popup({ offset: 25 })
            .setHTML(`<h3><a href="${feature.properties.link}">${feature.properties.title}</a></h3><br>
                          ${feature.properties.description}`);
        const marker = new mapboxgl.Marker()
            .setLngLat([feature.geometry.coordinates[0], feature.geometry.coordinates[1]])
            .setPopup(popup)
            .addTo(this.map);
    }

    goToPoint(feature) {
        this.map.flyTo({
            center: [feature.geometry.coordinates[0], feature.geometry.coordinates[1]]
        });
    }

    static getPoints() {
        return {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [
                    {
                        "type": "Feature",
                        "properties": {
                            "link" : "./assets/albuns/album1.html",
                            "title": "Museu Nacional Centro de Arte Reina Sofia",
                            "description": "Local onde se encotra o quadro Guernica"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -3.6946856460234327, 40.408843611900586
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "link" : "./assets/albuns/album2.html",
                            "title": "The Museum of Modern Art",
                            "description": "Local onde se encotra o quadro A Noite Estrelada e o quadro A Persistência da Memória"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -73.97757868465887, 40.7620990608665
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "link" : "./assets/albuns/album3.html",
                            "title": "The Museum of Modern Art",
                            "description": "Local onde se encotra o quadro A Noite Estrelada e o quadro A Persistência da Memória"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -73.97757868465887, 40.7620990608665
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "link" : "./assets/albuns/album4.html",
                            "title": "Galeria da Academia de Belas Artes",
                            "description": "Local onde se encotra a escultura de davi"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                11.258685315341145, 43.77769761173399
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "link" : "./assets/albuns/album5.html",
                            "title": "Museu de Arte Latino-americana",
                            "description": "Local onde se encotra o quadro Abaporu"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -58.4033959, -34.57617882933056
                            ]
                        }
                    },
                    {
                        "type": "Feature",
                        "properties": {
                            "link" : "./assets/albuns/album6.html",
                            "title": "Galeria Nacional de Arte",
                            "description": "Local onde se encotra o quadro O Grito"
                        },
                        "geometry": {
                            "type": "Point",
                            "coordinates": [
                                -77.019965, 38.891815739414334
                            ]
                        }
                    }

                ]
            }
        }
    }
}
