import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_AllMessages } from "../graphql/messageQuery";


const MessagesTable = () => {
  const [allMessagesData, setAllMessagesData] = useState([]);
  const { data } = useQuery(GET_AllMessages, {
    fetchPolicy: "no-cache",
  });

  useEffect(() => {
    if (data?.allMessages) {
      setAllMessagesData(data.allMessages);
    }
  }, [data]);
  console.log('here we go', { allMessagesData })
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>website</th>
          <th>message</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
        {allMessagesData.map((message) => (
          <tr key={message.id}>
            <td>{message.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MessagesTable;