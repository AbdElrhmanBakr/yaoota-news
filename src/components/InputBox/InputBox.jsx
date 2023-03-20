import "./InputBox.css";

const InputBox = ({ onInputChange }) => {
  return (
    <div className="input-container">
      <div className="input-title">Search by Post Title.</div>
      <div className="field">
        <input onChange={onInputChange} type="text" placeholder="Post Title" />
      </div>
    </div>
  );
};

export default InputBox;
