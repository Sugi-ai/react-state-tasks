import { EasyControlledInputField } from "@/components/easy_controlled_input_field";
import { EasyControlledInputFieldCount } from "@/components/easy_controlled_input_field_count";
import { EasyCounter } from "@/components/easy_counter";
import { EasyToggleMe } from "@/components/easy_toggle_me";
import { MediumTodoList } from "@/components/medium_todo_list";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      {/* 1 counter */}
      <EasyCounter />
      <EasyControlledInputField />
      <EasyToggleMe />
      <EasyControlledInputFieldCount/>
      <MediumTodoList />
    </div>
  );
};

export default Home;
