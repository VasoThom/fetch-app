import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Apod from "./components/Apod";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <h1>Space Pic des Tages </h1>
          </Col>
        </Row>
        <Row>
          <Apod />
        </Row>
      </Container>
    </div>
  );
}

export default App;
