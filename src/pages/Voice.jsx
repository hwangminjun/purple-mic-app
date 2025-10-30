import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Voice = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-primary/5 py-8 -mt-12">
      <div className="flex flex-col items-center space-y-8">
        <div className="text-center space-y-4">
          <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
            {/* Pulsing background circles */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-primary/20 animate-pulse" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center animate-ping">
              <div className="w-40 h-40 rounded-full bg-primary/10" />
            </div>
            
            {/* Microphone icon */}
            <div className="relative z-10">
              <Mic className="w-20 h-20 text-primary" />
            </div>
          </div>

          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-foreground">음성 인식 중...</h2>
            <p className="text-muted-foreground">말씀하세요</p>
          </div>
        </div>

        <div className="w-full max-w-lg px-4 flex gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="flex-1 py-6 text-base"
            onClick={() => navigate('/')}
          >
            취소
          </Button>
          <Button 
            size="lg" 
            className="flex-1 py-6 text-base"
            onClick={() => navigate('/voice-result')}
          >
            완료
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Voice;
