import Selector from "./Selector";
import Users from "./Users";

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return data;
}

const Stations = async () => {
  const users = await getUsers();
  // console.log(users)
  return (
    <div>
      <div>Stations</div>
      <Selector users={users} />
    </div>
  )
}

export default Stations