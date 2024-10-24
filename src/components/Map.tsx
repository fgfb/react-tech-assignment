import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import {ACCESS_TOKEN, BICESTER_OFFICE_COORDINATES, STATUS_COLOR_MAP} from "../constants/constants";
import {useEffect, useRef} from "react";
import {DataType} from "../types";

// Dummy access token used for this tech test only
mapboxgl.accessToken = ACCESS_TOKEN;

const customMarker = (engineerId: number) => {
  const customMarker = document.createElement("div");
  customMarker.style.borderRadius = '50%';
  customMarker.style.height = '8px';
  customMarker.style.width = '8px';
  customMarker.style.background = STATUS_COLOR_MAP[engineerId] ?? '#3f3f3f';
  customMarker.style.border = '1px solid white';
  return customMarker;
}

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

    data.forEach(({ engineerId, coords }) => {
      if (mapBoxRef.current) {
        const marker = customMarker(engineerId);
        new mapboxgl.Marker(marker).setLngLat(coords).addTo(mapBoxRef.current);
      }
    })

  }, []);

  return <div className="map" ref={mapContainerRef} />;
}

export default Map;
