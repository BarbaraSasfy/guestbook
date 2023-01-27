import Header from "../components/Header"
import MessagesTable from "../components/MessagesTable"
import LeaveMessageForm from "../components/LeaveMessageForm"
import RefreshMessagesButton from "../components/RefreshMessagesButton"

const Guestbook = () => {
  return (
    <div>
      <Header pageTitle="Welcome to my Guestbook" />
      <MessagesTable />
      <LeaveMessageForm />
      <RefreshMessagesButton />
    </div>

  );
}

export default Guestbook;