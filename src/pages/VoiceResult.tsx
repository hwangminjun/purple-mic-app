import { Badge } from "@/components/ui/badge";

const VoiceResult = () => {
  const hospitalData = [
    {
      name: "강남세브",
      location: "강남구",
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
    <div className="min-h-screen bg-background p-4">
      <div className="mb-6">
        <p className="text-lg text-foreground">
          "서울 강남구 응급실 병상 현황을 알려줘"
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">
          검색 결과 <span className="text-destructive">({hospitalData.length}건)</span>
        </h3>

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
  );
};

export default VoiceResult;
