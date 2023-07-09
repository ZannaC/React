import React from "react";

export default function App() {
  const [isClick, setIsClick] = React.useState(false);

  const handleClick = () => {
    setIsClick((prev) => !prev);
  };

  let content;

  if (!isClick) {
    content = <button onClick={handleClick}>Delete 🛑</button>;
  } else {
    content = (
      <div id="alert">
        <h2>Are you sure?</h2>

        <p>These changes can't be reverted!</p>

        <button onClick={handleClick}>Proceed</button>
      </div>
    );
  }
  return <div>{content}</div>;
}
