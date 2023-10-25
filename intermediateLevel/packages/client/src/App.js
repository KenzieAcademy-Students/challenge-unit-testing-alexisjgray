import './App.css';
import { Button, Container } from 'react-bootstrap'
import { useState } from 'react';

function App() {
  const [hide, setHide] = useState(true)

  const toggleHideSecretMessage = () => {
    setHide(!hide)
  }
  return (
    <Container>
      <h1>Test all the things!</h1>
      <Button onClick={toggleHideSecretMessage}>Click here to show a secret message!</Button>
      {
        !hide &&
        <p>The quick brown fox jumped over the lazy dog.</p>
      }
    </Container>
  );
}

export default App;
