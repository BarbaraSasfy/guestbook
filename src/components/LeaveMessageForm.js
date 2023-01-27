const LeaveMessageForm = () => {
  return (
    <form>
      <label for="name">Name:
        <input type="text" id="name" name="name" />
      </label>
      <label for="website">Website:
        <input type="url" id="website" name="website" />
        <br></br>
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}

export default LeaveMessageForm;