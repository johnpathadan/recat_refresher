import "./App.css";

function App() {
  const title = "Welome to the new blog";
  const likes = 50;
  const link = "http://google.com";
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>Liked {likes} times</p>
        <p>{10}</p>
        <p>{"Hello Ninjas"}</p>
        <p>{[1, 2, 3, 4, 5]}</p>
        <p>{Math.random() * 10}</p>
        <a href={link} target="_blank">
          Visit Google Website
        </a>
      </div>
    </div>
  );
}

export default App;
