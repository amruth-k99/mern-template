import React from "react";
import logo from "./logo.svg";
import "./css/App.css";
import Todo from "./components/Todo";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import SectionHeader from "./components/SectionHeader";
import Card from "./components/Card";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
    this.state = { data: [], isLoading: true, add: "", openNav: true };
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
  addTodo = (e) => {
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
      <div className="App" id="top">
        <NavBar />
        <SectionHeader />
        <section className="App-header">
          <div className="container">
            <img src={logo} className="App-logo" alt="logo" />
            Hello Amruth!
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
          </div>
        </section>
        <section className="body-container container">
          <hr className="m-2" />
          <div className="heading">Projects</div>
          <div className="row">
            <div className="col-sm-3">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-sm-3">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-sm-3">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-sm-3">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
            <div className="col-sm-3">
              <Card
                title="College Website"
                type="Prototype"
                content="  A college website to view student's performance, attendance and
                activities in and around the campus."
                openLink="https://www.google.com"
                techStack="ReactJs, NodeJs, MongoDB, Express"
                github="https://github.com/amruth-k99/clg_website_project"
              />
            </div>
          </div>
        </section>
        <Footer />
        <a href="#top" id="scrollToTop">
          <ion-icon name="arrow-up-outline" id="arrow"></ion-icon>
        </a>
      </div>
    );
  }
}

export default App;
