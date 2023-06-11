import { For } from "solid-js";

export default function Donation() {
  const donationAmounts: number[] = [25, 50, 100, 250];

  return (
    <div class="donation-box">
      <form method="GET" action="https://secure.anedot.com/robert-kohr-for-longview-school-board/donate">
        <h3>Donate</h3>
        <p>Help us bring charter schools to Longview</p>
        <For each={donationAmounts}>
          {(amount) => (
            <div style="padding:0.3em">
              <input type="radio" name="amount" id={`${amount}`} value={amount} style="height: 2em;width:2em;" />
              <label for={`${amount}`} style="display:inline-block;position:relative;top:-0.4em;left:0.4em">
                ${amount}
              </label>
            </div>
          )}
        </For>
        <div style="padding:0.3em">
          <input type="radio" name="amount" id="more" value="" style="height: 2em;width:2em;" />
          <label for="more" style="display:inline-block;position:relative;top:-0.4em;left:0.4em">
            Other
          </label>
        </div>
        <input
          type="submit"
          value="Donate"
          style="margin-top:1em;padding:1em;background-color:green;border-radius:1em;color:white;font-weight:bold;font-size:1.3em;"
        />
      </form>
    </div>
  );
}
