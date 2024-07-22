// readable store allows reading by subscription

import { readable } from "svelte/store";

// create a readable store that allows reading by subscription
export default readable(
  { lat: undefined, lng: undefined, location: false, errorMessage: undefined },
  (set) => {
    let id;
    let target;
    let options;

    function success(pos) {
      const crd = pos.coords;

      set({
        lat: crd.latitude,
        lng: crd.longitude,
        location: true,
        errorMessage: undefined,
      });

      //   if (
      //     target.latitude === crd.latitude &&
      //     target.longitude === crd.longitude
      //   ) {
      //     console.log("Congratulations, you reached the target");
      //     navigator.geolocation.clearWatch(id);
      //   }
    }

    function error(err) {
      set({
        lat: undefined,
        lng: undefined,
        location: undefined,
        errorMessage: err.message,
      });
    }

    target = {
      latitude: 0,
      longitude: 0,
    };

    options = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0,
    };

    id = navigator.geolocation.watchPosition(success, error, options);
  }
);
