import React, { useState } from 'react';
import { ChatEngine } from 'react-chat-engine';
import './App.css'

function App() {
  const [username, setUsername] = useState('');
  const [userSecret, setUserSecret] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSignIn = () => {
    // You can add validation logic here before setting loggedIn to true
    setLoggedIn(true);
  };

  return (
    <div>
      {!loggedIn ? (
        <div>
          <h2>Chat Sign In</h2>
          <form>
            <label>
              Username:
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
            <br />
            <label>
              User Secret:
              <input
                type="password"
                value={userSecret}
                onChange={(e) => setUserSecret(e.target.value)}
              />
            </label>
            <br />
            <button type="button" onClick={handleSignIn}>
              Sign In
            </button>
          </form>
        </div>
      ) : (
        <ChatEngine
          projectID='a14a8024-5183-461a-896d-cec72bb6fe3d'
          userName={username}
          userSecret={userSecret}
          height = '100vh'
        />
      )}
    </div>
  );
}

export default App;
