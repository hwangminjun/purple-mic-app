import { Card, CardContent } from "@/components/ui/card";

const VoiceResult = () => {
  const results = [
    {
      name: "가톨릭대학교 서울성모병원",
      phone: "1588-1511",
      recommendation: "추천 판단 근거: 신장질환, 뇌혈관질환"
    },
    {
      name: "강남세브란스병원",
      phone: "02-2019-3114",
      recommendation: "추천 판단 근거: 심장질환, 암치료"
    },
    {
      name: "삼성서울병원",
      phone: "02-3410-2114",
      recommendation: "추천 판단 근거: 종합검진, 암치료"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-6 space-y-6">
      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-foreground">AI 브리핑 결과</h1>
        <p className="text-sm text-muted-foreground">
          "60대 남성, 교통사고로 머리 외상과 의식 저하 상태입니다.
          혈압 85에 맥박 120으로 쇼크 의심됩니다.
          현재 기도 확보 완료, 산소 공급 중이며 중증 외상 가능성 높아 신속한 수용 요청드립니다."
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
