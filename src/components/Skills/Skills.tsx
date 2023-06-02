import Title from "../Title";
import react from "../../images/react.png";
import vite from "/vite.svg";
import typescript from "../../images/typescript.png";
import nodejs from "../../images/node js.png";
import express from "../../images/express.png";
import db from "../../images/mongodb.png";
import tailwind from "../../images/tailwind.png";
import scss from "../../images/scss.png";
import Skill from "./Skill";

export default function Skills() {
  return (
    <>
      <section
        className="skills mx-16 px-16 mt-20 max-[792px]:mx-0 max-[792px]:px-3"
        id="skills"
      >
        <Title
          text="Skills"
          has_p={true}
          p="I Learned More Than This Skills But This is What I Use In My Work"
        />
        <div className="skills-container flex gap-10 mt-10 justify-center max-[1178px]:flex-wrap">
          <Skill icon={react} />
          <Skill icon={vite} />
          <Skill icon={typescript} />
          <Skill icon={nodejs} />
          <Skill icon={express} />
          <Skill icon={db} />
          <Skill icon={tailwind} />
          <Skill icon={scss} />
        </div>
      </section>
    </>
  );
}
