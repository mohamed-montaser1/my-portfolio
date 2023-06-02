import "../../scss/landing/landing.scss";
import Button from "../Button/Button";

function Landing(): JSX.Element {
  return (
    <>
      <section className="landing mx-16 max-[614px]:-0 max-[436px]:px-10 max-[792px]:px-5 max-[792px]:m-0 pt-10 px-16 flex justify-evenly flex-col">
        <div className="landing__info">
          <h2 className="text-slate-200 text-[30px] max-[612px]:text-[20px] first-letter:text-[#5b7bff]">
            Hello!
          </h2>
          <h3 className="text-slate-200 text-[50px] -mt-2 max-[612px]:text-[35px]">
            I'm <span className="text-[#5b7bff]">Mohamed </span>
            <span className="text-[#8b9de9]">Montaser</span>
          </h3>
          <h4 className="text-slate-200 mb-5 max-[612px]:text-[20px]">
            Front End & Back End Developer
          </h4>
          <Button variant="blue" text="View Work" to={"#work"} onClick={null} />
        </div>
        {/* <div className="numbers-container flex max-[352px]:flex-col max-[352px]:mt-6 items-center gap-3">
          <div className="learning bg-[#19376D] w-52 h-32 rounded-[10px] flex flex-col justify-center items-center gap-2">
            <h3 className="text-slate-200 text-[20px]">Learning Years</h3>
            <h2 className="text-slate-200 text-[30px]">
              {new Date().getFullYear() - 2021}
            </h2>
          </div>
          <div className="clients w-52 h-32 rounded-[10px] flex flex-col justify-center items-center gap-2 bg-[#19376D]">
            <h3 className="text-slate-200 text-[20px]">Clients</h3>
            <h2 className="text-slate-200 text-[30px]">1</h2>
          </div>
          <div className="experience w-52 h-32 rounded-[10px] flex flex-col justify-center items-center gap-2 bg-[#19376D]">
            <h3 className="text-slate-200 text-[20px]">Experience</h3>
            <h2 className="text-slate-200 text-[30px]">0</h2>
          </div>
        </div> */}
      </section>
    </>
  );
}
export default Landing;
