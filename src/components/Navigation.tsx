import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import { Route } from "../App";
import { facebookLink, twitterLink } from "../constants";
import "./Navigation.scss";

export function Navigation(props: { routes: Route[] }) {
  return (
    <nav>
      <ul>
        <For each={props.routes}>
          {(route) => (
            <li>
              <A href={route.path}>{route.label}</A>
            </li>
          )}
        </For>
        <li>
          <a href={facebookLink}>
            <img src="/images/facebook.png" style="width:1em;position:relative;top:2px;left:-3px" />
            Facebook
          </a>
        </li>
        <Show when={twitterLink}>
          <li>
            <a href={twitterLink}>
              <img src="/images/twitter.png" style="width:1em;position:relative;top:2px;left:-3px" />
              Twitter
            </a>
          </li>
        </Show>
      </ul>
    </nav>
  );
}
