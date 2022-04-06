import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./UserAuthContext";

function App() {
  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
        
          <UserAuthContextProvider>
          <BrowserRouter> 
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            </BrowserRouter>
          </UserAuthContextProvider>
          
        </Col>
      </Row>
    </Container>
  );
}

export default App;