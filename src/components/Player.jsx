import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  let playerrName = <span className="player-name">{name}</span>;
  if (isEditing) {
    playerrName = <input type="text" value={name} required />;
  }

  return (
    <li>
      <span className="player">
        {playerrName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
