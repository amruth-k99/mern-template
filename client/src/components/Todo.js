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
        {this.props.get("This is from Child Comp--" + id)}
        {action}...{" "}
        <button href="#region" onClick={() => this.props.delete(id)}>
          Done
        </button>
      </div>
    );
  }
}
export default Todo;
