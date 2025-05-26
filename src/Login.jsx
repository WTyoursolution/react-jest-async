import React from "react";

export default function Login() {
  const [user, setUser] = useState("");
  const [messagae, setMessage] = useState("");

  async function handleSubmit(e) {
    e.preventDefault()
    try {
        const res = await fetch("https://www.google.com");
        const text = await res.text();
        setMessage("Welcome, text.name");
        console.log(text);
    } catch (error) {
        setMessage("Error: ", error);
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        aria-label="username"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      {/*in order to have a value we need to have a use state hook*/}
    <button>Log In</button>
    {message ? <div role="alert">{message}</div> : null}
    {/* checks if message has a value and displays it */}
    {/* If message doesnt exist, it renderrs null(nothing) */}

    </form>
  );
}
