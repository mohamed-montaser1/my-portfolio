import Title from "../Title";

function About() {
  return (
    <>
      <section
        className="about mx-16 px-16 mt-20 max-[792px]:mx-0 max-[792px]:px-3"
        id="about"
      >
        <Title text="About Me" />
        <div className="about-me-text">
          <p className="text-slate-200 w-[100%] text-[20px] mt-6">
            Hello I'm Mohamed Montaser, FullStack Developer. Started Learning Ui
            Designing Recently. I Created Professional Websites That You Will
            Like 😀. I have Finished A Lot Of Websites From Small Ideas Like
            Calculator To Bigger Like FullStack Facebook Clone & FullStack Admin
            Dashboard. I Learned A Lot Of Infos About Web Development From This
            Websites. I Started Freelancing Recently
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
