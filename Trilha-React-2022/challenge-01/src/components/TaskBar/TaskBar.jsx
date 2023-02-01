import { useState } from "react";
import styles from "./TaskBar.module.css";
import { ReactComponent as PlusIcon } from "../../assets/plus.svg";
import { v4 as uuidv4 } from "uuid";
import { useCallback } from "react";

export function TaskBar(props) {
  const [inputText, setInputText] = useState("");

  const onSubmitTask = useCallback(
    (key, text, tasks) => {
      if (!text) return;

      tasks.push({ id: key, done: false, text });
      props.setTasks([...tasks]);
      setInputText("");
    },
    [props.tasks]
  );

  const handleSubmit = (e) => {
    onSubmitTask(uuidv4(), inputText, props.tasks);
    e.preventDefault();
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        name="task-input-bar"
        id="task-input-bar"
        className={styles.inputText}
        placeholder="Adicione uma nova tarefa"
      />
      <button className={styles.createButton} type="submit">
        Criar <PlusIcon />
      </button>
    </form>
  );
}
