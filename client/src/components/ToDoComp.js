import React, { Component } from "react";
import Todo from "./Todo";

class ToDoComp extends Component {
  constructor(props) {
    super(props);
    this.state = { add: "", isLoading: true };
  }

  addTodo = (e) => {
    e.preventDefault();
    if (this.state.add.length) {
      const data = {
        action: this.state.add,
        required: true,
      };
      fetch("/api/todos/", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      this.getTodos();
    }
  };
  componentDidMount() {
    //method is called after the component is rendered
    this.getTodos();
  }

  getTodos = () => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((res) => this.setState({ data: res, isLoading: false }));
  };
  deleteTodo = (id) => {
    console.log(id);
    fetch("/api/todos/" + id, {
      method: "delete",
    })
      .then((res) => res.json)
      .then((res) => "done");
    this.getTodos();
  };
  handleChange = (e) => {
    this.setState({ add: e.target.value });
  };
  render() {
    const { add, isLoading, data } = this.state;
    return (
      <div className="todo">
        <div className="card card-body  noselect">
          <h5 className="card-title">Todo App</h5>
          <p className="card-text ">
            <form onClick={this.addTodo}>
              <input
                type="string"
                name="activity"
                value={add}
                onChange={this.handleChange}
                placeholder="Enter the task"
                className="input"
              />
              <input type="submit" required value="Submit" />
              <div id="projects"></div>
            </form>
            <hr className="m-3" />
            <p className="text-center">
              {" "}
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                <div>
                  {data.map((item) => (
                    <p key={item._id}>
                      <Todo
                        id={item._id}
                        action={item.action}
                        get={(e) => console.log(e)}
                        delete={() => this.deleteTodo(item._id)}
                      />
                    </p>
                  ))}
                </div>
              )}
            </p>
          </p>
          <div></div>
        </div>
      </div>
    );
  }
}
export default ToDoComp;
