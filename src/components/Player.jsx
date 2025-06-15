import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  let playerrName = <span className="player-name">{name}</span>;
  let buttonText = "Edit";
  if (isEditing) {
    playerrName = <input type="text" required />;
    buttonText = "Save";
  }

  return (
    <li>
      <span className="player">
        {playerrName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{buttonText}</button>
    </li>
  );
}
