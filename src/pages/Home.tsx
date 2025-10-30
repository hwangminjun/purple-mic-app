const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-2">홈</h1>
        <p className="text-muted-foreground">환영합니다</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-2">최근 활동</h3>
          <p className="text-sm text-muted-foreground">최근 활동 내역이 여기에 표시됩니다.</p>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-2">통계</h3>
          <p className="text-sm text-muted-foreground">사용 통계가 여기에 표시됩니다.</p>
        </div>

        <div className="bg-card rounded-2xl p-6 shadow-sm border border-border">
          <h3 className="text-lg font-semibold mb-2">알림</h3>
          <p className="text-sm text-muted-foreground">새로운 알림이 없습니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
