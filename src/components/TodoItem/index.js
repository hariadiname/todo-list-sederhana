import React, { Component } from "react";

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;

    return (
      <div className="list-group-item text-capitalize d-flex justify-content-between my-3">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span className="mx-3 text-success" onClick={handleEdit}>
            <i className="fas fa-pen" />
          </span>
          <span className="mx-3 text-danger" onClick={handleDelete}>
            <i className="fas fa-trash" />
          </span>
        </div>
      </div>
    );
  }
}

export default TodoItem;
