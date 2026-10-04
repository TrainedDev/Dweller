

const Button = ({ btnName, style = "w-full p-1 text-black flex justify-center items-center rounded rounded-full bg-white text-wrap text-xs" }) => {
  return <button className={style}>{btnName}</button>;
};

export default Button;
