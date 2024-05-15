import identity from "../../assets/identity.png";
import Button from "./Button";
function SubFeatures() {
  return (
    <div className="md:w-1/3 hover:shadow-2xl mx-4 duration-500 py-8 rounded-xl">
      <div className="flex flex-col items-center space-y-8 ">
        <img src={identity} alt="" />
        <h3 className=" text-lg">Brand Identity</h3>
        <p className="text-gray-500 font-bold text-center p-4">
          Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque
          sit am et tellus blandit. Etiam nec odio vestibul.
        </p>
      </div>
      <div className="flex justify-center items-center my-8">
        <Button />
      </div>
    </div>
  );
}

export default SubFeatures;
