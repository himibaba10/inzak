import VirtualGround from "./VirtualGround";

const VirtualGrounds = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between my-5 lg:my-16 gap-8">
      <VirtualGround
        title="Wedding"
        link="https://playground.babylonjs.com/full.html#3D1RT5#8"
      />
      <VirtualGround
        title="Birthday"
        link="https://playground.babylonjs.com/full.html#3D1RT5#9"
      />
      <VirtualGround
        title="Playground"
        link="https://playground.babylonjs.com/full.html#3D1RT5#10"
      />
    </div>
  );
};

export default VirtualGrounds;
