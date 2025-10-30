import { MapPin } from "lucide-react";

const Map = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">지도</h1>
        <p className="text-muted-foreground">위치 정보를 확인하세요</p>
      </div>

      <div className="bg-card rounded-2xl p-8 shadow-sm border border-border min-h-[400px] flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">지도가 여기에 표시됩니다</p>
        </div>
      </div>
    </div>
  );
};

export default Map;
