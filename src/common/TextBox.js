// generic Textbox
const TextBox = (props) => {
  return (
    <>
      <input
        className={props.className}
        style={props.style}
        type="text"
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </>
  );
};

export default TextBox;
