import quickSearchImage from "@/assets/quick-search.png";

const Map = () => {
  return (
    <div className="w-full h-full">
      <img 
        src={quickSearchImage} 
        alt="간편검색" 
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Map;
