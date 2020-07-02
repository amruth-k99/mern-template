import React, { Component } from "react";

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { action, id } = this.props;
    return (
      <div className="text-red">
        {this.props.get("This is from Child Comp--"+id)}
        {action}...{" "}
        <a href="#region" onClick={() => this.props.delete(id)}>
          Done
        </a>
      </div>
    );
  }
}
export default Todo;
