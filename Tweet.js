function Tweet(props) {
  return (
    <div>
      <h3>Username: {props.username}</h3>
      <h3>Name: {props.name}</h3>
      <h3>Date: {props.date}</h3>
      <h3>Message: {props.message}</h3>
    </div>
  );
}
