function Button({ children, bgColor, textColor }) {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
  };
  return (
    <button className="btn" style={style}>
      {children}
    </button>
  );
}

export default Button;
