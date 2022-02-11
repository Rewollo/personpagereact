import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import './index.css';
import Group from "./routes/group";
import Groups from "./routes/groups";
import Skills from "./routes/skills";
import Wishes from "./routes/wishes";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
  <Route path="/" element={<App />}>
    <Route path="skills" element={<Skills />} />
    <Route path="groups" element={<Groups />}>
      <Route path=":groupId" element={<Group />} />
    </Route>
    <Route path="wishes" element={<Wishes />} />
  </Route>
</Routes>
  </BrowserRouter>,
  rootElement
);

