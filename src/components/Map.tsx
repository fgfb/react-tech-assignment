import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {ACCESS_TOKEN, BICESTER_OFFICE_COORDINATES} from "../constants/constants";
import {useEffect, useRef} from "react";
import {DataType} from "../types";

// Dummy access token used for this tech test only
mapboxgl.accessToken = ACCESS_TOKEN;

function Map({ data }: { data: DataType }) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapBoxRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (mapContainerRef.current) {
      mapBoxRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        center: BICESTER_OFFICE_COORDINATES,
        zoom: 18
      });
    }

    data.forEach(({ coords }) => {
      mapBoxRef.current && new mapboxgl.Marker().setLngLat(coords).addTo(mapBoxRef.current);
    })

  }, []);

  return <div className="map" ref={mapContainerRef} />;
}

export default Map;
