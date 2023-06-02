interface Props {
  text: string;
  classname?: string;
  has_p?: boolean;
  p?: string;
}

export default function Title({ text, p, classname }: Props) {
  return (
    <>
      <h2 className={`${classname} text-slate-400 text-[40px] m-0`}>{text}</h2>
      <p className="text-slate-300 font-bold text-[25px]">{p}</p>
    </>
  );
}
