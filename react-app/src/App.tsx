import { useState } from "react";
import Alert from "./Components/Alert";
import Button from "./Components/Button";

export default function App() {
  let cities = ["London", "New York", "Tokyo", "Mumbai"];
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    // <div>
    //   <ListGroup
    //     items={cities}
    //     heading={"Cities"}
    //     onSelectItem={(item: String) => {
    //       console.log(item);
    //     }}
    //   />
    // </div>
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <Button
        color="success"
        onClick={() => {
          console.log("Clicked");
          setAlertVisibility(true);
        }}
      >
        My Button
      </Button>
    </div>
  );
}
