import { Card, CardContent } from "@/components/ui/card";

const VoiceResult = () => {
  const results = [
    {
      name: "부안성모병원",
      phone: "1588-1511",
      recommendation: "추천 판단 근거: 성모병원은 ETA가 34분으로 비교적 빠르며, 수용 이력이 높아 환자의 신속한 이송이 가능합니다. 병상 여유도 11.4로 충분하여, 대퇴부 통증을 호소하는 80대 여성 환자에게 적합한 선택입니다. (ETA 34분, 수용 5, 병상 11.4)"
    },
    {
      name: "김제우석병원",
      phone: "02-2019-3114",
      recommendation: "추천 판단 근거: 우석병원은 ETA가 42분으로 적절하며, 수용 이력도 안정적입니다. 병상 여유도 8.2로 대퇴부 통증을 호소하는 80대 여성 환자의 수용이 가능합니다. (ETA 42분, 수용 3, 병상 8.2)"
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
          "Pre-KTAS 예상 L3 등급이고 80대 여성입니다.<br />
          가정 내 낙상으로 인한 대퇴부 통증이 있고 의식 명료하고 호흡곤란 없습니다.<br />
          수용 가능 여부 확인 부탁드립니다."
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
