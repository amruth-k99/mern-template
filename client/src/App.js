import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import Todo from "./components/Todo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], isLoading: true, add: "" };
  }
  componentDidMount() {
    //method is called after the component is rendered
    this.getTodos();
  }

  componentDidUpdate() {
    //Runs after componentDidMount is called ( after the update has been rendered in the DOM).
  }
  componentWillUnmount() {
    //The component is run before this whole component is unmounted(removed).
    alert("The component is run before this component is  unmounted(removed).");
  }
  //If you use arrow function, you need not use bind, if using normal function, you must use this.bind in constructor
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
  addTodo = () => {
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
  handleChange = (e) => {
    this.setState({ add: e.target.value });
  };
  render() {
    const { data, isLoading, add } = this.state;
    return (
      <div className="App">
        <div className="container" style={{ color: "red" }}>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            Hello Amruth!
            <input
              type="string"
              name="activity"
              value={add}
              onChange={this.handleChange}
              placeholder="Enter the task"
              className="input"
            />
            <input
              type="submit"
              required
              value="Submit"
              onClick={this.addTodo}
            />
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <ul>
                {data.map((item) => (
                  <li key={item._id}>
                    <Todo
                      id={item._id}
                      action={item.action}
                      get={(e) => console.log(e)}
                      delete={() => this.deleteTodo(item._id)}
                    />
                  </li>
                ))}
              </ul>
            )}
          </header>
        </div>
      </div>
    );
  }
}

export default App;
