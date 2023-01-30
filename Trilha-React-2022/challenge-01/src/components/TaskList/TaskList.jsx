import styles from "./TaskList.module.css";
import { TaskLine } from "./TaskLine";
import { useState } from "react";
import { ReactComponent as Clipboard } from "../../assets/clipboard.svg";
import { TaskBar } from "../TaskBar";
import { useEffect } from "react";
import { useCallback } from "react";

export function TaskList() {
  const [finishedCount, setFinishedCount] = useState(0);
  const [tasks, setTasks] = useState([]);

  const handleToggleDone = useCallback(
    (key) => {
      const tasksArray = tasks.map((element) => {
        if (element.id === key) {
          element.done = !element.done;
          if (element.done) {
            setFinishedCount(finishedCount + 1);
          } else {
            setFinishedCount(finishedCount - 1);
          }
        }
        return element;
      });

      setTasks(tasksArray);
    },
    [tasks]
  );

  const handleDeleteTask = useCallback(
    (key) => {
      const tasksArray = tasks.filter((element, index) => {
        if (element.id === key) {
          element.done && setFinishedCount(finishedCount - 1);

          return;
        }
        return element;
      });

      setTasks(tasksArray);
    },
    [tasks]
  );

  return (
    <>
      <TaskBar tasks={tasks} setTasks={setTasks} />

      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            Tarefas criadas
            <span className={styles.headerNumbers}>{tasks.length}</span>
          </div>
          <div>
            Concluídas
            <span className={styles.headerNumbers}>
              {(tasks.length && `${finishedCount} de ${tasks.length}`) || 0}
            </span>
          </div>
        </div>
        <div className={styles.contentContainer}>
          {(tasks.length &&
            tasks.map((task) => {
              return (
                <TaskLine
                  key={`task-${task.id}`}
                  task={task}
                  toggleDone={handleToggleDone}
                  setTasks={setTasks}
                  deleteTask={handleDeleteTask}
                />
              );
            })) || (
            <div className={styles.emptyText}>
              <Clipboard />
              <p>Você ainda não tem tarefas cadastradas</p>
              <p>Crie tarefas e organize seus item a fazer</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
