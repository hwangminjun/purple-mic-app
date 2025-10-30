import { Button } from "@/components/ui/button";

const Voice = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-b from-background to-primary/5 py-8">
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-8">
          <div className="relative w-64 h-64 mx-auto">
            {/* Animated circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-28 h-28 rounded-full bg-primary/20 animate-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center animate-ping">
              <div className="w-48 h-48 rounded-full bg-primary/10" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center" style={{ animation: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 0.5s' }}>
              <div className="w-56 h-56 rounded-full bg-primary/5" />
            </div>
            
            {/* Waveform bars */}
            <div className="absolute inset-0 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 bg-primary rounded-full"
                  style={{
                    height: '40%',
                    animation: `pulse 1s ease-in-out infinite ${i * 0.1}s`,
                    opacity: 0.6 + (i * 0.1)
                  }}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-foreground">음성 인식 중...</h2>
            <p className="text-muted-foreground">말씀하세요</p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-md px-4 flex gap-3">
        <Button variant="outline" size="lg" className="flex-1">
          취소
        </Button>
        <Button size="lg" className="flex-1">
          완료
        </Button>
      </div>
    </div>
  );
};

export default Voice;
