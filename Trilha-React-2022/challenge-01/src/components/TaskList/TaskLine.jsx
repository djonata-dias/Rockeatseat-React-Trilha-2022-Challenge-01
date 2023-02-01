import styles from "./TaskLine.module.css";
import { ReactComponent as TrashIcon } from "../../assets/trash.svg";

export function TaskLine({ task, toggleDone, deleteTask }) {
  return (
    <div className={styles.taskLine}>
      <label className={styles.labelCheckBox}>
        <input
          type="checkbox"
          checked={task.done}
          onChange={() => toggleDone(task.id)}
          className={styles.inputCheckBox}
        />
        <span className={styles.checkMark}></span>
      </label>
      <p type="text" className={styles.taskText}>
        {task.text}
      </p>
      <button
        className={styles.trashButton}
        onClick={() => deleteTask(task.id)}
      >
        <TrashIcon />
      </button>
    </div>
  );
}
