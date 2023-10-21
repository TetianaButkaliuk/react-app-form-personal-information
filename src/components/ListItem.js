import React from "react";
import styles from "./ListItem.module.css";
import { TiDeleteOutline } from "react-icons/ti";

const ListItem = (props) => {
  return props.users.map((user, index) => {
    return (
      <li key={index} className={styles["list-item"]}>
        {`${user.name} - ${user.age} years old`}
        <TiDeleteOutline onClick={() => props.deleteUserHandler(user.id)} />
      </li>
    );
  });
};

export default ListItem;
