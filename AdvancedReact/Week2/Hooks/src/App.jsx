import { useState, useEffect } from "react";
import "./App.css";
import { RadioGroup, RadioOption } from "./Radio";

//Fourth Assigment
const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen

      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render({ mousePosition });
};

// This component should not receive any props
const PanelMouseLogger = () => {
  // The below if statement can be removed after the render props pattern is implemented

  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <MousePosition
        render={({ mousePosition }) => (
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        )}
      />
    </div>
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  return (
    <MousePosition
      render={({ mousePosition }) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard(e) {
    setGiftCard((prevState) => ({
      ...prevState,
      text: "Your coupon has been used",
      instructions: "Please visit our restaurant to renew your gift card",
      valid: false,
    }));
  }

  //Second assigment

  const [user, setUser] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=1")
      .then((response) => response.json())
      .then((data) => setUser(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  //third assigment
  const [selected, setSelected] = useState("");
  return (
    <>
      <div style={{ padding: "40px" }}>
        <h1>Gift Card Page</h1>
        <h2>
          Customer: {giftCard.firstName} {giftCard.lastName}
        </h2>
        <h3>{giftCard.text}</h3>
        <p>{giftCard.instructions}</p>
        {giftCard.valid && (
          <button onClick={spendGiftCard}>Spend Gift Card</button>
        )}
      </div>
      <div>
        {Object.keys(user).length > 0 ? (
          <div style={{ padding: "40px" }}>
            <h1>Customer data</h1>
            <h2>Name: {user.results[0].name.first}</h2>
            <img src={user.results[0].picture.large} alt="" />
          </div>
        ) : (
          <h1>Data pending...</h1>
        )}
      </div>
      <div className="App">
        <h2>How did you hear about Little Lemon?</h2>
        <RadioGroup onChange={setSelected} selected={selected}>
          <RadioOption value="social_media">Social Media</RadioOption>
          <RadioOption value="friends">Friends</RadioOption>
          <RadioOption value="advertising">Advertising</RadioOption>
          <RadioOption value="other">Other</RadioOption>
        </RadioGroup>
        <button disabled={!selected}>Submit</button>
      </div>
      <div>
        <PanelMouseLogger />
        <PointMouseLogger />
      </div>
    </>
  );
}

export default App;
