type Props = {
  icon: string;
};

function Skill({ icon }: Props) {
  return (
    <>
      <div className="skill rounded-[50%] w-32 bg-[#19376D] p-5 flex justify-center items-center">
        <img src={icon} loading="lazy" alt="React Icon" className="w-32" />
      </div>
    </>
  );
}

export default Skill;
