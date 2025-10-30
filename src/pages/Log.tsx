import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Log = () => {
  const logData = [
    {
      briefing: "서울 강남구 응급실 병상 현황을 알려줘",
      hospitals: ["강남세브란스병원", "삼성서울병원"]
    },
    {
      briefing: "서울 송파구 소아과 진료 가능한 병원",
      hospitals: ["서울아산병원", "강동경희대병원", "올림픽파크포레온"]
    },
    {
      briefing: "경기도 성남시 응급실 대기시간 짧은 곳",
      hospitals: ["분당서울대병원", "분당차병원"]
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <h2 className="text-xl font-semibold mb-4">로그</h2>
      
      <div className="space-y-4">
        {logData.map((log, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-base font-medium">브리핑 생성 결과</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-foreground">{log.briefing}</p>
              
              <div>
                <h4 className="text-sm font-medium mb-2">병원명</h4>
                <ul className="space-y-1">
                  {log.hospitals.map((hospital, hospitalIndex) => (
                    <li key={hospitalIndex} className="text-sm text-muted-foreground">
                      • {hospital}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Log;
