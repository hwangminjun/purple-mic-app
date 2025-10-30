import mapImage from "@/assets/map-placeholder.jpg";

const Home = () => {
  return (
    <div className="w-full h-full">
      <img 
        src={mapImage} 
        alt="병원 지도" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Home;
