import { Container, Row, Col, Navbar } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./UserAuthContext";
import './Auth.css'
import { Helmet } from "react-helmet";

function App() {
  
  return (
    
      
        
          <UserAuthContextProvider>
            <BrowserRouter> 
          <Helmet>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="apple-touch-icon" sizes="180x180" href="../global-assests/favicon_io/apple-touch-icon.png"/>
    <link rel="icon" type="image/png" sizes="32x32" href="../global-assests/favicon_io/favicon-32x32.png"/>
    <link rel="icon" type="image/png" sizes="16x16" href="../global-assests/favicon_io/favicon-16x16.png"/>
   
    <script src="https://kit.fontawesome.com/4336aaf0f1.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"/>
 
    <link rel="preconnect" href="https://fonts.googleapis.com"/>
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
    {/* <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;900&display=swap" rel="stylesheet"/> */}
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
    <link rel="stylesheet" href="./style.css"/>
    <title>ForgetMeNot</title>
    </Helmet>
    <Navbar id="navbar" class="navbar" fixed="top">
        {/* <!-- Nav Bar --> */}
        <div class="container-fluid navbar-container">
            <nav class="navbar navbar-expand-lg navbar-dark" >
                <a class="navbar-brand brand" href="http://localhost:3500"><img class="logo-img" src={require("../global-assests/icon.png")}/>ForgetMeNot</a>
                <div class="collapse navbar-collapse" id="navbarToggler">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                    <a class="nav-link" href="/login">Log In</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="">Teacher Tools</a>
                    </li>
                    <li class="nav-item">
                        {/* <!-- Sends user to teachers version of dashboard to acess student just change "teacher" to "student" this can be done in search bar or in code --> */}
                        <a class="nav-link" href="http://localhost:3500/teacher">Dashboard</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="http://localhost:3500/todolist">To Do List</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" href="http://localhost:3500">Home</a>
                    </li>
                </ul>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            </nav>
        </div>
        
  </Navbar>
  <div>
  <Container style={{ width: "400px"}}>
          
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
            
            </Container>
          </div>
          </BrowserRouter>
          </UserAuthContextProvider>
          
    
  );
}

export default App;