import VirtualGround from "./VirtualGround";
import weddingImage from "../../assets/Wedding.webp";
import birthdayImage from "../../assets/Birthday.webp";
import playgroundImage from "../../assets/Playground.webp";

const VirtualGrounds = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between my-5 lg:my-16 gap-8">
      <VirtualGround title="Wedding" image={weddingImage} />
      <VirtualGround title="Birthday" image={birthdayImage} />
      <VirtualGround title="Playground" image={playgroundImage} />
    </div>
  );
};

export default VirtualGrounds;
