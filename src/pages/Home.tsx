import { MapPin, Star, Clock, Phone } from "lucide-react";

const Home = () => {
  const hospitals = [
    {
      id: 1,
      name: "서울대학교병원",
      specialty: "종합병원",
      rating: 4.8,
      distance: "1.2km",
      address: "서울시 종로구",
      phone: "02-2072-2114",
    },
    {
      id: 2,
      name: "삼성서울병원",
      specialty: "종합병원",
      rating: 4.9,
      distance: "2.5km",
      address: "서울시 강남구",
      phone: "02-3410-2114",
    },
    {
      id: 3,
      name: "세브란스병원",
      specialty: "종합병원",
      rating: 4.7,
      distance: "3.1km",
      address: "서울시 서대문구",
      phone: "02-2228-5800",
    },
    {
      id: 4,
      name: "서울아산병원",
      specialty: "종합병원",
      rating: 4.8,
      distance: "4.2km",
      address: "서울시 송파구",
      phone: "02-3010-3000",
    },
    {
      id: 5,
      name: "강남성모병원",
      specialty: "종합병원",
      rating: 4.6,
      distance: "2.8km",
      address: "서울시 서초구",
      phone: "02-2258-1234",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">추천 병원</h1>
        <p className="text-sm text-muted-foreground">내 주변 추천 병원을 확인하세요</p>
      </div>

      <div className="space-y-3">
        {hospitals.map((hospital) => (
          <div
            key={hospital.id}
            className="bg-card rounded-2xl p-5 shadow-sm border border-border hover:border-primary/50 transition-all cursor-pointer"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-1">{hospital.name}</h3>
                <p className="text-sm text-muted-foreground">{hospital.specialty}</p>
              </div>
              <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-primary fill-primary" />
                <span className="text-sm font-semibold text-primary">{hospital.rating}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{hospital.address}</span>
                <span className="text-primary font-medium ml-auto">{hospital.distance}</span>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>{hospital.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
