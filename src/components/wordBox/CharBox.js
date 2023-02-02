import { charBox } from "./CharBox.module.css";

const CharBox = ({ children, correct }) => {
  return (
    <li className={charBox}>
      <span style={{ visibility: correct ? "visible" : "hidden" }}>
        {children}
      </span>
    </li>
  );
};
export default CharBox;
