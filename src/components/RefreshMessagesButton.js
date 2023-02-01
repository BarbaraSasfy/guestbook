const RefreshMessagesButton = () => {
  const refresh = () => window.location.reload(true)
  return (
    <button onClick={refresh}>Refres Messages</button>
  )
}

export default RefreshMessagesButton;