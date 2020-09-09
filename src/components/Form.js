import React, { useState } from "react";

const Form = (props) => {
  const { hideModal, getFinalData } = props;

  const [desc, setDesc] = useState("");
  const [date, setDate] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("open");

  const updateDescription = (e) => setDesc(e.target.value);
  const updateDate = (e) => setDate(e.target.value);
  const updateAssignee = (e) => setAssignee(e.target.value);
  const updateStatus = (e) => setStatus(e.target.value);

  const updateStatusCard = (obj = {}) => () => {
    getFinalData(obj);
    hideModal();
    clearData();
  };

  const closeModal = () => {
    hideModal();
    clearData();
  };

  const clearData = () => {
    setDesc("");
    setDate("");
    setAssignee("");
    setStatus("open");
  };
  const isFormFilled = () => {
    if (desc.length && date.length && assignee.length && status.length) {
      return true;
    }
    return false;
  };

  const finalObj = {
    id: Math.floor(Math.random() * 10000 + 1),
    desc,
    date,
    assignee,
    status,
  };
  const disableCLass = isFormFilled() ? "" : "disableButton";
  return (
    <div className="form">
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={desc}
        onChange={updateDescription}
      />
      <input type="date" name="date" onChange={updateDate} value={date} />
      <input
        type="text"
        name="assignee"
        placeholder="Assignee"
        value={assignee}
        onChange={updateAssignee}
      />
      <div className="dropDown">
        <select value={status} onChange={updateStatus}>
          <option value="open">Open</option>
          <option value="progress">In - Progress</option>
          <option value="done">Done</option>
        </select>
      </div>
      <div className="button">
        <button className={disableCLass} onClick={updateStatusCard(finalObj)}>
          Save
        </button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default Form;
