import { useState } from "react";
import { ChevronRight, MapPin, Flame, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState("서울특별시 강남구");

  const hospitalData = [
    {
      name: "강남세브",
      location: "강남구",
      isHot: true,
      stats: {
        중급실입원: { current: 2, total: 21, status: "응급" },
        중급실소아: { current: 2, total: 2, status: "normal" },
        분만실: { value: "가능/1", status: "available" },
        응급거래: { current: 1, total: 1, status: "normal" }
      }
    },
    {
      name: "삼성서울",
      location: "강남구",
      isHot: true,
      stats: {
        중급실입원: { current: -10, total: 52, status: "응급" },
        중급실소아: { current: 2, total: 4, status: "warning" },
        분만실: { value: "가능/8", status: "available" },
        응급거래: { current: 0, total: 2, status: "응급" }
      }
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "응급":
        return <Badge variant="destructive" className="text-xs">응급</Badge>;
      case "warning":
        return <Badge className="bg-orange-500 text-white text-xs">보통</Badge>;
      case "available":
        return <Badge className="bg-green-500 text-white text-xs">가능</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full overflow-y-auto bg-background">
      <div className="w-full">
        {/* Tabs */}
        <Tabs defaultValue="region" className="w-full">
          <TabsList className="w-full grid grid-cols-2 rounded-none h-12">
            <TabsTrigger value="region">
              시/도 선택
            </TabsTrigger>
            <TabsTrigger value="radius">반경조건 설정</TabsTrigger>
          </TabsList>

          <TabsContent value="region" className="mt-0 p-4 space-y-4">
            {/* Region Selector */}
            <div className="flex items-center justify-between p-3 border rounded-md bg-background cursor-pointer hover:bg-accent">
              <span className="text-sm">{selectedRegion}</span>
              <ChevronRight className="w-4 h-4 text-muted-foreground" />
            </div>

            {/* Results Section */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium">
                  중급실 가능 병상 조회 <span className="text-destructive">(2건)</span>
                </h3>
                <Info className="w-4 h-4 text-muted-foreground" />
              </div>

              {/* Table Header */}
              <div className="grid grid-cols-5 gap-2 text-xs text-muted-foreground pb-2 border-b">
                <div className="text-center">기관명</div>
                <div className="text-center">중급실입원</div>
                <div className="text-center">중급실소아</div>
                <div className="text-center">분만실</div>
                <div className="text-center">응급거래</div>
              </div>

              {/* Hospital List */}
              <div className="space-y-3">
                {hospitalData.map((hospital, index) => (
                  <div key={index} className="space-y-2 pb-3 border-b last:border-b-0">
                    {/* Hospital Name Row */}
                    <div className="flex items-center justify-center">
                      <span className="text-sm font-medium">{hospital.name}</span>
                    </div>

                    {/* Hospital Info Row */}
                    <div className="grid grid-cols-5 gap-2 items-center">
                      <div className="flex items-center justify-center text-xs">
                      </div>

                      <div className="flex flex-col items-center justify-center gap-1">
                        {getStatusBadge(hospital.stats.중급실입원.status)}
                        <span className="text-xs">
                          {hospital.stats.중급실입원.current}/{hospital.stats.중급실입원.total}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        {getStatusBadge(hospital.stats.중급실소아.status)}
                        <span className="text-xs">
                          {hospital.stats.중급실소아.current}/{hospital.stats.중급실소아.total}
                        </span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        {getStatusBadge(hospital.stats.분만실.status)}
                        <span className="text-xs">{hospital.stats.분만실.value}</span>
                      </div>

                      <div className="flex flex-col items-center gap-1">
                        {getStatusBadge(hospital.stats.응급거래.status)}
                        <span className="text-xs">
                          {hospital.stats.응급거래.current}/{hospital.stats.응급거래.total}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="radius" className="mt-0 p-4">
            {/* Radius content will be implemented later */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Map;
