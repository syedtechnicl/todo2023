const Todolist = (props) => {
  return (
    <>
      <div className="todo_style">
        <li>
          <i
            onClick={() => {
              props.onSelect(props.id);
            }}
            className="fas fa-times"
            aria-hidden="true"
          />
          {props.texts}
        </li>
      </div>
    </>
  );
};
export default Todolist;