const lights = ["red", "green", "yellow"];

export const FunctionalTrafficLight = () => {
  const [index, setIndex] = useState(0);

  const nextState = () => {
    setIndex((prev) => (prev + 1) % lights.length);
  };

  const current = lights[index];

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className={`light red ${current === "red" ? "active" : ""}`}></div>
      <div
        className={`light yellow ${current === "yellow" ? "active" : ""}`}
      ></div>
      <div
        className={`light green ${current === "green" ? "active" : ""}`}
      ></div>

      <button onClick={nextState}>Next State</button>
    </div>
  );
};
