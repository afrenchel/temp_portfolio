import Lottie from "lottie-react";
import workInProgress from "./assets/wip.json";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import ME from './assets/me.jpg'
import './App.css'

function App() {

  return (
    <div className="grid-container">
      <header className="header">
        <h1>Welcome to my website!</h1>
      </header>
      <main className="main">
        <h2>Hi! I'm <span className="name-color">Alina</span> !</h2>
        <h4>Currently, I'm working on my portfolio..</h4>
        <p>I had to make use of the domain I purchased and I wanted to test this nice lottie 	<span className="heart">&#9829;</span></p>
        <div className="img-wrapper">
          <img src={ME} alt="Alina Frenchel" />
        </div>

      </main>
      <div className="right">
        <a href="https://www.linkedin.com/in/alina-frenchel-a9337b22a/" target="_blank">
          <LinkedInIcon color="primary" fontSize="large" />
        </a>
        <a href="https://github.com/afrenchel" target="_blank">
          <GitHubIcon color="action" fontSize="large" />
        </a>
      </div>
      <aside className="wip-container">
        <h2>Work in progress</h2>
        <Lottie animationData={workInProgress} />
      </aside>
      <footer className="footer">
        2023 	&#169;Alina Frenchel
      </footer>

    </div>
  )
}

export default App
