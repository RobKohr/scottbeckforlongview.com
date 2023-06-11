import { A } from "@solidjs/router";
import { For } from "solid-js";
import { Route } from "../App";
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
          <a href="https://facebook.com/RobertKohrJr">
            <img src="/images/facebook.png" style="width:1em;position:relative;top:2px;left:-3px" />
            Facebook
          </a>
        </li>
        <li>
          <a href="https://twitter.com/RobertKohrJr">
            <img src="/images/twitter.png" style="width:1em;position:relative;top:2px;left:-3px" />
            Twitter
          </a>
        </li>
      </ul>
    </nav>
  );
}
