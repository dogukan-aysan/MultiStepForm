import Input from "./Input";

function Info() {
  return (
    <div className="info">
      <Input label="Name" placeholder="Stephen King" />
      <Input label="Email Address" placeholder="stephenking@lorem.com" />
      <Input label="Phone Number" placeholder="+1 234 567 890" />
    </div>
  );
}

export default Info;
