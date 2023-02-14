import { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const ToDo = (props) => {
  return (
    <>
      {/*Display ToDos */}
      {props.toDo && props.toDo.length ? "" : "No Task..."}

      {props.toDo &&
        props.toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                    <div className="iconsWrap">
                      <span
                        title="Completed"
                        className=""
                        onClick={(e) => props.markDone(task.id)}
                      >
                        <FontAwesomeIcon icon={faCircleCheck} />
                      </span>

                      {task.status ? null : (
                        <span
                          title="Edit"
                          onClick={() => {
                            props.setUpdateData({
                              id: task.id,
                              title: task.title,
                              status: task.status ? true : false,
                            });
                          }}
                        >
                          <FontAwesomeIcon icon={faPen} />
                        </span>
                      )}

                      <span
                        title="Delete"
                        onClick={() => props.deleteTask(task.id)}
                      >
                        <FontAwesomeIcon icon={faTrashCan} />
                      </span>
                    </div>
                  </div>
                </div>
              </Fragment>
            );
          })}
    </>
  );
};
export default ToDo;
