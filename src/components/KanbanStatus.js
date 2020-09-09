import React from "react";

class KanbanStatus extends React.PureComponent {
  getCardDom = () => {
    const { status = [], deleteCard } = this.props;
    return status.map((item) => {
      const {
        id = "",
        description = "",
        date = "",
        assignee = "",
        status = "",
      } = item;
      return (
        <div className="card" key={id}>
          <div className="card-desc">
            Description: <span>{description}</span>
          </div>
          <div className="card-date">
            Due Date: <span>{date}</span>
          </div>
          <div className="card-assignee">
            <span className="material-icons">account_circle</span>
            {assignee}
          </div>
          <div className="editDelete">
            {/* <button >
              <span className="material-icons">create</span>
            </button> */}
            <button onClick={() => deleteCard(status, id)}>
              <span className="material-icons">delete</span>
            </button>
          </div>
        </div>
      );
    });
  };
  render() {
    const { openModal } = this.props;
    const card = this.getCardDom();
    return (
      <div className="statusContainer">
        {card}
        <div className="addTask" onClick={openModal}>
          <span className="material-icons">add_circle_outline</span>
          Add Task
        </div>
      </div>
    );
  }
}

export default KanbanStatus;
