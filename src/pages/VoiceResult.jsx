import { Card, CardContent } from "@/components/ui/card";

const VoiceResult = () => {
  const results = [
    {
      name: "가톨릭대학교 서울성모병원",
      phone: "1588-1511",
      recommendation: "추천 질환: 신장질환, 뇌혈관질환"
    },
    {
      name: "강남세브란스병원",
      phone: "02-2019-3114",
      recommendation: "추천 질환: 심장질환, 암치료"
    },
    {
      name: "삼성서울병원",
      phone: "02-3410-2114",
      recommendation: "추천 질환: 종합검진, 암치료"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">AI 브리핑 결과</h1>
        <p className="text-sm text-muted-foreground">
          "서울 강남구 근처 응급실 있는 병원 알려줘"
        </p>
      </div>

      <div className="space-y-3">
        {results.map((result, index) => (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4 space-y-2">
              <h3 className="font-semibold text-foreground">{result.name}</h3>
              <p className="text-sm text-muted-foreground">📞 {result.phone}</p>
              <p className="text-sm text-primary">{result.recommendation}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VoiceResult;
