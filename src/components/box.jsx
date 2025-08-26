import Todo from "@/app/todo/page";

export const Box = ({ backgroundColor, height, color, title, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={
        " rounded-md py-2 px-4"
        // className +
        // `${isActive ? "bg-[#3C82F6]" : "bg-[#F3F4F6] "}`
      }
      style={{
        backgroundColor,
        height,
        color,
      }}
    >
      {title}
    </button>
  );
};
