import Donation from "../components/Donation";
import { candidateHeadShot, candidateName, headerBackground, position } from "../constants";
import About from "./About";
import Issues from "./Issues";
import "./index.scss";

export default function Home() {
  window.test = "home";
  return (
    <div class="route-home" style="position:relative;top:-50px;">
      <div
        class="header-image-section"
        style={`background-image: url("${headerBackground}");
`}
      >
        <div style=" flex-grow:4">
          <h1>
            {candidateName} for {position}
          </h1>

          <img src={candidateHeadShot} alt="candidate" class="candidate-head" />
        </div>
        <div>
          <Donation />
        </div>
      </div>
      <div class="content">
        <About />
        <Issues />
      </div>
    </div>
  );
}
