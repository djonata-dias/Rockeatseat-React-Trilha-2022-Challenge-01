import { useState } from "react";
import styles from "./TaskBar.module.css";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";

export function TaskBar() {
  const [inputText, setInputText] = useState("");

  const onSubmitTask = () => {
    setInputText("");
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        name="task-input-bar"
        id="task-input-bar"
        className={styles.inputText}
        placeholder="Adicione uma nova tarefa"
      />
      <button
        className={styles.createButton}
        type="submit"
        onClick={onSubmitTask}
      >
        Criar <PlusIcon />
      </button>
    </div>
  );
}
