import { useEffect, useState } from "react";

export const useLocation = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    if (navigator?.geolocation) {
      window.navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  }, []);

  return location;
};
