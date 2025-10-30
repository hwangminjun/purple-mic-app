import { useEffect, useRef, useState } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [tokenSubmitted, setTokenSubmitted] = useState(false);

  useEffect(() => {
    if (!mapContainer.current || !tokenSubmitted || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/light-v11",
      center: [126.9780, 37.5665], // Seoul coordinates
      zoom: 12,
    });

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      "top-right"
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [tokenSubmitted, mapboxToken]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setTokenSubmitted(true);
    }
  };

  if (!tokenSubmitted) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-10rem)] px-4">
        <div className="w-full max-w-md bg-card rounded-2xl p-8 shadow-sm border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-2">Mapbox 토큰 입력</h2>
          <p className="text-sm text-muted-foreground mb-6">
            지도를 표시하려면 Mapbox 공개 토큰이 필요합니다.{" "}
            <a
              href="https://mapbox.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Mapbox
            </a>
            에서 토큰을 가져오세요.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                type="text"
                placeholder="pk.eyJ1Ij..."
                value={mapboxToken}
                onChange={(e) => setMapboxToken(e.target.value)}
                className="w-full"
              />
            </div>
            <Button type="submit" className="w-full">
              지도 표시
            </Button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-[calc(100vh-10rem)]">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default Map;
