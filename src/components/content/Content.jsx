import AddOnList from "../addOns/AddOnList";
import Header from "../header/Header";
// import Info from "../info/Info";
// import Plan from "../plan/Plan";

function Content() {
  return (
    <section className="content">
      <Header />
      {/* <Info /> */}
      {/* <Plan /> */}
      <AddOnList />
    </section>
  );
}

export default Content;
