function Person(props) {
  const isAdult =
    props.age >= 18 ? "please go vote!" : "you must be 18 to vote!";
  const hobbies = props.hobbies.map((hobbie) => <li>{hobbie}</li>);
  return (
    <div>
      <p>Learn some information about this person</p>
      <li>Name: {props.name}</li>
      <li>Age: {props.age}</li>
      <ul>
        Hobbies:
        {hobbies}
      </ul>
      <h3>{isAdult}</h3>
    </div>
  );
}
