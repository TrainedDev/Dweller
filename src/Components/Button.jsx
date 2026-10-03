

const Button = ({ btnName, style = "w-fit h-[2rem] flex justify-center items-center p-4 rounded rounded-full bg-white" }) => {
  return <div className={style}>{btnName}</div>;
};

export default Button;
