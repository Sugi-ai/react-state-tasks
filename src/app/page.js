import { EasyControlledInputField } from "@/components/easy_controlled_input_field";
import { EasyCounter } from "@/components/easy_counter";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* 1 counter */}
      <EasyCounter />
      <EasyControlledInputField />
    </div>
  );
};

export default Home;
