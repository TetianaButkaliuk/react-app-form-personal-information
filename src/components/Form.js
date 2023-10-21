import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import styles from "./Form.module.css";

const Form = (props) => {
  const [addName, setAddName] = useState("");
  const [addAge, setAddAge] = useState("");

  const handlerFormSubmit = (e) => {
    e.preventDefault();
    props.addUserHandler({ name: addName, age: addAge, id: uuidv4() });
  };

  return (
    <form className={styles["user-form"]} onSubmit={handlerFormSubmit}>
      <h1>Enter user details:</h1>
      <div className={styles["form-input"]}>
        <label className={styles["input-label"]}>Name</label>
        <input
          className={styles["name-input"]}
          type="text"
          value={addName}
          onChange={(e) => setAddName(e.target.value)}
        />
      </div>
      <div className={styles["form-input"]}>
        <label className={styles["input-label"]}>Age</label>
        <input
          className={styles["age-input"]}
          type="number"
          value={addAge}
          onChange={(e) => setAddAge(e.target.value)}
        ></input>
      </div>
      <button className={styles["btn-create-user"]} type="submit">
        Create user
      </button>
    </form>
  );
};

export default Form;
