import { Route, Routes } from "@solidjs/router";
import _ from "lodash";
import { Component, For } from "solid-js";
import { Navigation } from "./components/Navigation";
import Home from "./routes";
import About from "./routes/About";
import Issues from "./routes/Issues";

const Volunteer: Component = () => <div>Volunteer</div>;
const Contact: Component = () => <div>Contact</div>;
const News: Component = () => <div>News</div>;
const Donate: Component = () => <div>Donate</div>;
export interface Route {
  path: string;
  component: Component;
  label?: string;
}

window.addEventListener("popstate", function () {
  console.log("change event");
});

const routes: Route[] = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/issues", component: Issues },
  // { path: "/volunteer", component: Volunteer },
  // { path: "/news", component: News },
  // { path: "/contact", component: Contact },
  // { path: "/donate", component: Donate },
];
routes.forEach((route) => {
  route.label = _.capitalize(route.path.replace("/", ""));
  if (!route.label) {
    route.label = "Home";
  }
});

const App: Component = () => {
  console.log("app");
  return (
    <div class="app">
      <div class="red-background"></div>
      <Navigation routes={routes} />
      <div class="content" style="min-height:90vh">
        <Routes>
          <For each={routes}>{(route) => <Route path={route.path} component={route.component} />}</For>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export function Footer() {
  return (
    <div class="footer" style="text-align:center; width:100%;font-size:0.9em">
      Powered by <a href="https://solidjs.com">SolidJS</a>
    </div>
  );
}

export default App;
