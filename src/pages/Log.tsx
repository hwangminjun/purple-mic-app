import { Card, CardContent } from "@/components/ui/card";

const Log = () => {
  const logData = [
    {
      briefing: "서울 강남구 응급실 병상 현황을 알려줘",
      hospital: "강남세브란스병원",
      date: "2025-10-29"
    },
    {
      briefing: "서울 강남구 응급실 병상 현황을 알려줘",
      hospital: "삼성서울병원",
      date: "2025-10-29"
    },
    {
      briefing: "서울 송파구 소아과 진료 가능한 병원",
      hospital: "서울아산병원",
      date: "2025-10-28"
    },
    {
      briefing: "서울 송파구 소아과 진료 가능한 병원",
      hospital: "강동경희대병원",
      date: "2025-10-28"
    },
    {
      briefing: "경기도 성남시 응급실 대기시간 짧은 곳",
      hospital: "분당서울대병원",
      date: "2025-10-27"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <h2 className="text-xl font-semibold mb-4">로그</h2>
      
      <div className="space-y-4">
        {logData.map((log, index) => (
          <Card key={index}>
            <CardContent className="pt-6 space-y-2">
              <p className="text-sm text-foreground">{log.briefing}</p>
              <p className="text-sm font-medium">{log.hospital}</p>
              <p className="text-xs text-muted-foreground">{log.date}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Log;
