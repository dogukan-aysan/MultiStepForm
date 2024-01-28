import Button from "../button/Button";

function Directions() {
  return (
    <section className="directions">
      <Button bgColor="blue" textColor="white">
        Next Step
      </Button>
      <Button bgColor="white" textColor="grey">
        Go Back
      </Button>
    </section>
  );
}

export default Directions;
