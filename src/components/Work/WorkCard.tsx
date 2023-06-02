type Props = {
  title: string;
  link: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};

function WorkCard({ title, link, onClick }: Props) {
  return (
    <>
      <div className="work-card flex justify-between items-center bg-[#19376D] px-5 rounded-lg my-4">
        <h3 className="text-slate-200 text-[30px] max-[792px]:text-[20px] max-[792px]:leading-loose ">{title}</h3>
        <a
          href={link}
          className="text-slate-200 font-bold ease-linear duration-300 hover:text-slate-400 max-[792px]:text-[14px]"
          target="_blank"
          onClick={onClick}
        >
          Live Preview
        </a>
      </div>
    </>
  );
}

export default WorkCard;
