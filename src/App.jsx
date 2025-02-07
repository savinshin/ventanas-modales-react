import { useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button className="show-modal">Show modal 1</button>
      <button className="show-modal">Show modal 2</button>
      <button className="show-modal">Show modal 3</button>
      <div className="modal hidden">
        <button className="close-modal">&times;</button>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1> I'm a modal window</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
      <div className="overlay hidden"></div>
      <script src="script.js"></script>
    </>
  );
}

export default App;
