function App() {
  return (
    <div>
      <Tweet
        username="aaaaaa"
        name="Nick"
        date={new Date().toDateString()}
        message="I love React!!!"
      />
      <Tweet
        username="bbbbbb"
        name="Mick"
        date={new Date().toDateString()}
        message="I like React!!!"
      />
      <Tweet
        username="ccccc c"
        name="Rick"
        date={new Date().toDateString()}
        message="I Hate React!!!"
      />
    </div>
  );
}
