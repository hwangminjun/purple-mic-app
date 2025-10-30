import { User, Settings, Bell, HelpCircle } from "lucide-react";

const Profile = () => {
  const menuItems = [
    { icon: User, label: "계정 정보", description: "프로필 및 개인정보 관리" },
    { icon: Bell, label: "알림 설정", description: "알림 환경설정" },
    { icon: Settings, label: "앱 설정", description: "테마 및 기본 설정" },
    { icon: HelpCircle, label: "도움말", description: "자주 묻는 질문 및 지원" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-2xl font-bold text-foreground mb-1">사용자</h1>
        <p className="text-sm text-muted-foreground">user@example.com</p>
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className="w-full bg-card rounded-2xl p-5 shadow-sm border border-border hover:border-primary/50 transition-all text-left"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-0.5">{item.label}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Profile;
