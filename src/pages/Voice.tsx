import { Mic, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Voice = () => {
  const [isRecording, setIsRecording] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">음성 녹음</h1>
        <p className="text-muted-foreground">음성을 녹음하고 저장하세요</p>
      </div>

      <div className="max-w-md mx-auto">
        <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="relative">
              <div className={`w-32 h-32 rounded-full flex items-center justify-center transition-all ${
                isRecording 
                  ? "bg-destructive animate-pulse" 
                  : "bg-primary"
              }`}>
                {isRecording ? (
                  <Square className="w-12 h-12 text-primary-foreground" />
                ) : (
                  <Mic className="w-12 h-12 text-primary-foreground" />
                )}
              </div>
              {isRecording && (
                <div className="absolute inset-0 rounded-full border-4 border-destructive animate-ping" />
              )}
            </div>

            <div className="text-center">
              <p className="text-lg font-medium mb-2">
                {isRecording ? "녹음 중..." : "녹음 시작하기"}
              </p>
              <p className="text-sm text-muted-foreground">
                {isRecording ? "버튼을 눌러 녹음을 중지하세요" : "버튼을 눌러 녹음을 시작하세요"}
              </p>
            </div>

            <Button
              size="lg"
              className="w-full"
              variant={isRecording ? "destructive" : "default"}
              onClick={() => setIsRecording(!isRecording)}
            >
              {isRecording ? "녹음 중지" : "녹음 시작"}
            </Button>
          </div>
        </div>

        <div className="mt-6 space-y-2">
          <h3 className="font-semibold text-foreground mb-3">최근 녹음</h3>
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-card rounded-xl p-4 shadow-sm border border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Mic className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-medium text-sm">녹음 {i}</p>
                  <p className="text-xs text-muted-foreground">2024-01-{15 - i}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Voice;
