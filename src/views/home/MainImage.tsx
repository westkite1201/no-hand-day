import Image from "next/image";

type MainImageProps = {
  isHandDay: boolean;
};
const MainImage = ({ isHandDay }: MainImageProps) => {
  return (
    <div className="p-4">
      <div className="bg-black flex items-center justify-center">
        <div>
          {isHandDay ? (
            <p className="text-9xl">👋</p>
          ) : (
            <p className="text-9xl">🚚 ✅</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainImage;
