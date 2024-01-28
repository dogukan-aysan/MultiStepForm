function Input({ label, placeholder }) {
  return (
    <div className="input">
      <span>{label}</span>
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default Input;
