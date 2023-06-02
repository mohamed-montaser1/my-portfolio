import Title from "../Title";
import WorkCard from "./WorkCard";

function Work() {
  let link = "https://example.com";
  const commingSoon = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    alert("Will Put Link As Soon As Possible!");
  };
  return (
    <>
      <section className="work px-16 mx-16 mt-20 max-[792px]:mx-0 max-[792px]:px-3" id="work">
        <Title text="Portfolio" />
        <div className="work-container mt-10">
          <WorkCard
            link={link}
            onClick={commingSoon}
            title="Facebook Clone"
            key={Math.random() * 5 + 1 * Math.random() * 1_000_000}
          />
          <WorkCard
            link={"https://mohamed-montaser1.github.io/calculator"}
            title="Calculator"
            key={Math.random() * 5 + 1 * Math.random() * 1_000_000}
          />
          <WorkCard
            link={"https://documenter.getpostman.com/view/22643212/2s93m8xL7a"}
            title="Blog API"
            key={Math.random() * 5 + 1 * Math.random() * 1_000_000}
          />
          <WorkCard
            link="https://documenter.getpostman.com/view/22643212/2s93mBxefh"
            title="Send Mails API"
            key={Math.random() * 5 + 1 * Math.random() * 1_000_000}
          />
          <WorkCard link={link} title="Admin Dashboard" onClick={commingSoon} />
        </div>
      </section>
    </>
  );
}

export default Work;
