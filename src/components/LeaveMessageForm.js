import { useState } from "react";


const LeaveMessageForm = () => {
  const [name, setName] = useState("");
  const website = "website";
  const message = "Hey There!";
  const date = "date";

  const addMessageHandler = () => {
    fetch(`http://localhost:3001?query=mutation {
        createMessage(name: "${name}", website: "${website}", message: "${message}", date: "${date}") {
          id
          name
          website
          message
          date
        }
      }
      `, { method: "POST" })

  }


  return (
    <form onSubmit={addMessageHandler()}>
      <label>
        Name:
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
      </label><br />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LeaveMessageForm;