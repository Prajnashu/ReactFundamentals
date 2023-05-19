//component, follows PascalCasing notation
function Message() {
  //jsx
  const name = "Praj";
  //braces in JSX can have JS expressions producing a value
  if (name) return <h1>Hello {name}</h1>;
  else return <h1>Hello World</h1>;
}

export default Message;
