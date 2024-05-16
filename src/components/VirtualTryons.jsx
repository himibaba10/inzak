import Section from "../utils/Section";
import SectionHeading from "./Subcomponents/SectionHeading";
import VirtualGrounds from "./Subcomponents/VirtualGrounds";

const VirtualTryons = () => {
  return (
    <Section id="virtual-tryons">
      <SectionHeading subtitle="Virtual Tryons">
        Try The Virtual Ground
      </SectionHeading>
      <VirtualGrounds />
    </Section>
  );
};

export default VirtualTryons;
