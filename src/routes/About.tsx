import { candidateFirstName } from "../constants";

export default function About() {
  window.test = "about";
  return (
    <div class="section">
      <h2 id="about">About {candidateFirstName}</h2>
      <img src="/images/about1.jpeg" class="picture-image" style="float:left" />
      <p>
        Scott Beck is running for this school board to effect change in our local schools. Bringing to the board strong communication skills,
        accountability to parents, a strong moral sense of right and wrong, and the courage to stand up for what he believes in. He has spent
        thousands of hours volunteering in our community to empower and teach children and teens by way of youth sports and other organizations. This
        gave an understanding of the needs of parents and children as well as a direct line to many parents dissatisfied with the way things have
        been.
      </p>
      <img src="/images/about2.jpeg" class="picture-image" style="float:right" />

      <p>
        One final qualification that sets this candidate aside from several others is that he has skin in the game so to speak, his children attend
        Longview public schools with one more to begin before the term is up. Decisions made by this board will have a profound effect on not only his
        life but his children.
      </p>
    </div>
  );
}
