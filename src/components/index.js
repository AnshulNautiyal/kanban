import React from "react";
import KanbanStatus from "./KanbanStatus";
import Modal from "./Modal";
import Form from "./Form";

class Kanban extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      open: [],
      progress: [],
      done: [],
      showhide: false,
    };
  }

  getFinalData = (obj) => {
    const { id, desc, date, assignee, status } = obj;

    this.setState((prevState) => {
      return {
        ...prevState,
        [status]: [
          {
            id,
            description: desc,
            date,
            assignee,
            status:status
          },
          ...prevState[status],
        ],
      };
    });
  };
  openModal = () => {
    this.setState({
      showhide: true,
    });
  };
  hideModal = () => {
    this.setState({
      showhide: false,
    });
  };

  deleteCard = (status, id) => {
    let tempStatus = this.state[status];
    const deletItemIndex = tempStatus.findIndex( ele => ele.id === id);
    tempStatus.splice(deletItemIndex, 1);
    console.log(tempStatus)
    this.setState(prevState => {
        return {
            ...prevState,
            [status]:tempStatus.length ? [...tempStatus] : []
        }
        
    })
  }
  render() {
    const {
      open = [],
      progress = [],
      done = [],
      showhide = false,
    } = this.state;

    return (
      <>
        <div className="header">
          <div className="header-name">Kanban</div>
          <div className="profile">
            <span className="material-icons">account_circle</span>
            AnshulJS
          </div>
        </div>
        <div className="parentContainer">
          <div className="status">
            <h2 className="open">Open</h2>
            <KanbanStatus status={open} openModal={this.openModal} deleteCard={this.deleteCard} />
          </div>
          <div className="status">
            <h2 className="inprogress">In - Progress</h2>
            <KanbanStatus status={progress} openModal={this.openModal} deleteCard={this.deleteCard} />
          </div>
          <div className="status">
            <h2 className="done">Done</h2>
            <KanbanStatus status={done} openModal={this.openModal} deleteCard={this.deleteCard}/>
          </div>
        </div>
        <Modal showhide={showhide}>
          <Form getFinalData={this.getFinalData} hideModal={this.hideModal} />
        </Modal>
      </>
    );
  }
}

export default Kanban;
