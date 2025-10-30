import { Card, CardContent } from "@/components/ui/card";

const VoiceResult = () => {
  const hospitalData = [
    {
      name: "강남세브란스병원",
      phone: "02-2019-3000",
      recommendation: "응급실 병상 2개 가용, 중환자실 여유 있음"
    },
    {
      name: "삼성서울병원",
      phone: "02-3410-2114",
      recommendation: "분만실 8개 가용, 소아과 대기 시간 짧음"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <Card className="mb-6">
        <CardContent className="pt-6">
          <p className="text-lg text-foreground">
            "서울 강남구 응급실 병상 현황을 알려줘"
          </p>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="text-sm font-medium">
          검색 결과 <span className="text-destructive">({hospitalData.length}건)</span>
        </h3>

        <div className="space-y-3">
          {hospitalData.map((hospital, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground min-w-[100px]">기관명:</span>
                    <span className="text-sm font-medium">{hospital.name}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground min-w-[100px]">전화번호:</span>
                    <span className="text-sm">{hospital.phone}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-sm text-muted-foreground min-w-[100px]">추천판단근거:</span>
                    <span className="text-sm">{hospital.recommendation}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceResult;
