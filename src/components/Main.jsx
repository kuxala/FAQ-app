import AcortionCard from "./AcordionCard";

function Main() {
  return (
    <>
      <div className="container">
        <div className="right-col">
          <img
            src="images\illustration-woman-online-desktop.svg"
            className="image"
          />
        </div>
        <div classname="left-col">
          <h1 className="faq">FAQ</h1>
          <p className="faq-p">
            <AcortionCard
              title="How many team members can I invite?"
              dropdown="5"
            />
          </p>
          <p className="faq-p">
            <AcortionCard
              title="What is the maximum file upload size?"
              dropdown="No more than 2GB. All files in your account 
            must fit your allotted storage space."
            />
          </p>

          <p className="faq-p">
            <AcortionCard
              title="How do i reset my password?"
              dropdown="Ask someone"
            />
          </p>
          <p className="faq-p">
            <AcortionCard title="Can i cancel my subscription?" dropdown="No" />
          </p>

          <p className="faq-p">
            <AcortionCard
              title="Do you provide additional support?"
              dropdown="Definetly Not"
            />
          </p>
        </div>
      </div>
    </>
  );
}

export default Main;
