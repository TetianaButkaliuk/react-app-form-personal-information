import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const USERS_DATA = [
    {
      name: "Tetiana",
      age: 29,
      id: "id1",
    },
    {
      name: "Dmytro",
      age: 36,
      id: "id2",
    },
  ];
  const [usersData, setUsersData] = useState(USERS_DATA);

  const addUserHandler = (user) => setUsersData([...usersData, user]);

  const deleteUserHandler = (id) => {
    const newUsersData = usersData.filter((user) => {
      return id !== user.id;
    });
    setUsersData(newUsersData);
  };

  return (
    <div className="App">
      <Form addUserHandler={addUserHandler} />
      <List users={usersData} deleteUserHandler={deleteUserHandler} />
    </div>
  );
}

export default App;
