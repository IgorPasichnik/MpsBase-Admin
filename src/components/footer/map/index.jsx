import React, { useCallback, useRef, useState } from "react";
import {
  YMap,
  YMapComponentsProvider,
  YMapDefaultSchemeLayer,
  YMapDefaultFeaturesLayer,
  YMapListener,
  YMapControls,
  YMapGeolocationControl,
  YMapZoomControl,
  YMapDefaultMarker,
} from "ymap3-components";
import customization from "./customization.json";
import { location as LOCATION, apiKey } from "./helpers";

export function Map() {
  const [location, setLocation] = useState(LOCATION);
  const ymap3Ref = useRef();

  const onUpdate = useCallback(({ location, mapInAction }) => {
    if (!mapInAction) {
      setLocation({
        center: location.center,
        zoom: location.zoom,
      });
    }
  }, []);

  return (
    <YMapComponentsProvider apiKey={apiKey} lang="ru_RU">
      <YMap
        style={{
          width: "100%",
          height: "100%",
        }}
        key="map"
        ref={ymap3Ref}
        location={location}
        mode="vector"
      >
        <YMapDefaultSchemeLayer theme="dark" customization={customization} />
        <YMapDefaultFeaturesLayer />
        <YMapListener onUpdate={onUpdate} />
        <YMapDefaultMarker coordinates={LOCATION.center} color="#E07E0A" />
        <YMapControls position="left bottom">
          <YMapZoomControl />
        </YMapControls>
        <YMapControls position="bottom right">
          <YMapGeolocationControl />
        </YMapControls>
      </YMap>
    </YMapComponentsProvider>
  );
}
