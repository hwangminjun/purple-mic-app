import { Activity, BarChart3, TrendingUp, Clock } from "lucide-react";

const Dashboard = () => {
  const stats = [
    { icon: Activity, label: "총 방문 횟수", value: "12", color: "text-primary" },
    { icon: Clock, label: "이번 달 방문", value: "3", color: "text-accent" },
    { icon: TrendingUp, label: "건강 점수", value: "85", color: "text-green-500" },
    { icon: BarChart3, label: "평균 대기시간", value: "15분", color: "text-orange-500" },
  ];

  const recentActivity = [
    { date: "2024-01-20", hospital: "서울대학교병원", type: "진료 완료" },
    { date: "2024-01-15", hospital: "삼성서울병원", type: "예약 완료" },
    { date: "2024-01-10", hospital: "세브란스병원", type: "진료 완료" },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground mb-1">대시보드</h1>
        <p className="text-sm text-muted-foreground">나의 건강 활동을 확인하세요</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-card rounded-2xl p-5 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className={`w-5 h-5 ${stat.color}`} />
                </div>
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-foreground mb-3">최근 활동</h2>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-4 shadow-sm border border-border"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">{activity.hospital}</p>
                  <p className="text-sm text-muted-foreground">{activity.type}</p>
                </div>
                <span className="text-xs text-muted-foreground">{activity.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
