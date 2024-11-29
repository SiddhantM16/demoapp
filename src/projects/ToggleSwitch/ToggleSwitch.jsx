import { useState } from "react";
import "./ToggleSwitch.css";

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const toggle = isOn ? "on" : "off";
  const bgToggle = { backgroundColor: isOn ? "#4caf50" : "" };
  return (
    <div
      className="toggle-switch"
      style={bgToggle}
      onClick={handleToggleSwitch}
    >
      <div className={`switch ${toggle}`}>
        <span className="switch-state">{isOn ? "On" : "Off"}</span>
      </div>
    </div>
  );
};

export default ToggleSwitch;
