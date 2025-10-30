import { useState } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const Map = () => {
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedRadius, setSelectedRadius] = useState("");

  const cities = [
    "서울특별시", "부산광역시", "대구광역시", "인천광역시", 
    "광주광역시", "대전광역시", "울산광역시", "세종특별자치시",
    "경기도", "강원도", "충청북도", "충청남도",
    "전라북도", "전라남도", "경상북도", "경상남도", "제주특별자치도"
  ];

  const radiusOptions = [
    { value: "500", label: "500m" },
    { value: "1000", label: "1km" },
    { value: "3000", label: "3km" },
    { value: "5000", label: "5km" },
    { value: "10000", label: "10km" }
  ];

  return (
    <div className="w-full h-full overflow-y-auto bg-background p-6">
      <div className="max-w-2xl mx-auto space-y-8">
        {/* 시/도 선택 */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">시/도 선택</h2>
          <RadioGroup value={selectedCity} onValueChange={setSelectedCity}>
            <div className="grid grid-cols-2 gap-3">
              {cities.map((city) => (
                <div key={city} className="flex items-center space-x-2">
                  <RadioGroupItem value={city} id={city} />
                  <Label htmlFor={city} className="cursor-pointer text-foreground">
                    {city}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>

        {/* 반경조건 설정 */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-foreground">반경조건 설정</h2>
          <RadioGroup value={selectedRadius} onValueChange={setSelectedRadius}>
            <div className="flex flex-col space-y-3">
              {radiusOptions.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label htmlFor={option.value} className="cursor-pointer text-foreground">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default Map;
