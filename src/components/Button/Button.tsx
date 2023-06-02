import "../../scss/button/button.scss";

type Props = {
  variant: "blue" | "dark-blue" | "mov" | "dark-mov";
  text: string;
  className?: string;
  onClick: (() => void) | null;
  to?: string;
};

let blueStyle = [
  "text-white",
  "bg-[#576CBC]",
  "px-7",
  "py-2",
  "rounded-sm",
  "leading-6",
  "text-[20px]",
  "hover:bg-[#5760BA]",
  "ease-linear",
  "duration-200",
];
// let darkBlue = [];
// let mov = [];
// let darkMov = [];

function Button({ variant, text, className, to, onClick }: Props) {
  const goTo = () => {
    window.location.href = window.location.origin + to;
  };
  return (
    <>
      <button
        className={`${
          variant === "blue" ? blueStyle.join(" ") : "y"
        } ${className}`}
        onClick={onClick !== null ? onClick : goTo}
      >
        {text}
      </button>
    </>
  );
}

export default Button;
