import { useState } from "react";
import { ChevronRight, MapPin, Flame, Info, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const Map = () => {
  const [selectedRegion, setSelectedRegion] = useState("서울특별시 강남구");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("서울특별시");

  const cities = [
    "서울특별시",
    "부산광역시",
    "대구광역시",
    "인천광역시",
    "광주광역시",
    "대전광역시",
    "울산광역시",
    "세종특별자치시",
    "경기도",
    "강원특별자치도"
  ];

  const districts = {
    "서울특별시": ["전체", "강남구", "강동구", "강북구", "강서구", "관악구", "광진구", "구로구", "금천구", "노원구", "도봉구", "동대문구"],
    "부산광역시": ["전체", "해운대구", "수영구", "남구", "동래구", "부산진구"],
    "대구광역시": ["전체", "중구", "동구", "서구", "남구", "북구"],
    "인천광역시": ["전체", "중구", "동구", "미추홀구", "연수구", "남동구"],
    "광주광역시": ["전체", "동구", "서구", "남구", "북구", "광산구"],
    "대전광역시": ["전체", "동구", "중구", "서구", "유성구", "대덕구"],
    "울산광역시": ["전체", "중구", "남구", "동구", "북구", "울주군"],
    "세종특별자치시": ["전체"],
    "경기도": ["전체", "수원시", "성남시", "고양시", "용인시", "부천시"],
    "강원특별자치도": ["전체", "춘천시", "원주시", "강릉시", "동해시", "태백시"]
  };

  const handleConfirm = () => {
    setIsDialogOpen(false);
  };

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

  const getStatusBadge = (status) => {
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
      <div className="w-full p-4 space-y-4">
        {/* Region Selector */}
        <div 
          onClick={() => setIsDialogOpen(true)}
          className="flex items-center justify-between p-3 border rounded-md bg-background cursor-pointer hover:bg-accent"
        >
          <span className="text-sm">{selectedRegion}</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
        </div>

        {/* Region Selection Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-md p-0">
            <DialogHeader className="p-4 pb-2">
              <div className="flex items-center justify-between">
                <DialogTitle>지역</DialogTitle>
                <button
                  onClick={() => setIsDialogOpen(false)}
                  className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </DialogHeader>

            <div className="flex h-[400px]">
              {/* Cities List */}
              <ScrollArea className="w-[40%] border-r">
                <div className="p-2">
                  {cities.map((city) => (
                    <div
                      key={city}
                      onClick={() => setSelectedCity(city)}
                      className={`px-4 py-3 cursor-pointer text-sm rounded-md transition-colors ${
                        selectedCity === city
                          ? "text-primary font-medium"
                          : "hover:bg-accent"
                      }`}
                    >
                      {city}
                      {selectedCity === city && (
                        <ChevronRight className="inline-block w-4 h-4 ml-1" />
                      )}
                    </div>
                  ))}
                </div>
              </ScrollArea>

              {/* Districts List */}
              <ScrollArea className="flex-1">
                <div className="p-2">
                  {districts[selectedCity]?.map((district) => (
                    <div
                      key={district}
                      onClick={() => setSelectedRegion(`${selectedCity} ${district}`)}
                      className={`px-4 py-3 cursor-pointer text-sm rounded-md transition-colors ${
                        selectedRegion === `${selectedCity} ${district}`
                          ? "bg-accent/50"
                          : "hover:bg-accent"
                      }`}
                    >
                      {district}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>

            <div className="p-4 pt-2">
              <Button
                onClick={handleConfirm}
                className="w-full bg-primary hover:bg-primary/90"
              >
                조회하기
              </Button>
            </div>
          </DialogContent>
        </Dialog>

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
              <div key={index} className="pb-3 border-b last:border-b-0">
                {/* Hospital Info Row */}
                <div className="grid grid-cols-5 gap-2 items-center">
                  <div className="flex items-center justify-center text-sm font-medium">
                    {hospital.name}
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
      </div>
    </div>
  );
};

export default Map;
