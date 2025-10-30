import { FileText } from "lucide-react";

const Log = () => {
  const logs = [
    { id: 1, title: "로그 항목 1", date: "2024-01-15", content: "첫 번째 로그 내용입니다." },
    { id: 2, title: "로그 항목 2", date: "2024-01-14", content: "두 번째 로그 내용입니다." },
    { id: 3, title: "로그 항목 3", date: "2024-01-13", content: "세 번째 로그 내용입니다." },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">로그</h1>
        <p className="text-muted-foreground">활동 기록을 확인하세요</p>
      </div>

      <div className="space-y-4 max-w-2xl mx-auto">
        {logs.map((log) => (
          <div key={log.id} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-foreground">{log.title}</h3>
                  <span className="text-sm text-muted-foreground">{log.date}</span>
                </div>
                <p className="text-sm text-muted-foreground">{log.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Log;
