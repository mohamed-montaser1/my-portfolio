import Title from "../Title";
import Form from "./Form";

export default function Contact() {
  return (
    <>
      <section className="contact px-16 mx-16 mt-16 max-[792px]:mx-0 max-[792px]:px-3">
        <Title text="Contact Me" key={Math.random() * 1_10014_111} />
        <Form />
      </section>
    </>
  );
}
