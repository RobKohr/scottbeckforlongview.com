import Donation from "../components/Donation";
import About from "./About";
import Issues from "./Issues";
import "./index.scss";

export default function Home() {
  window.test = "home";
  return (
    <div class="route-home" style="position:relative;top:-50px;">
      <div class="header-image-section" style="display:flex; width:100%;align-content:stretch">
        <div style=" flex-grow:4">
          <h1>Robert Kohr Jr for Longview School Board</h1>
          <h2>Bringing Charter Schools to Longview</h2>

          <img src="/images/candidate.png" alt="candidate" class="candidate-head" />
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
