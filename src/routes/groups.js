import { Link, Outlet } from "react-router-dom";
import { getGroups } from "../data";

export default function Groups() {
    let groups = getGroups();
  return (
    <div style={{ display: "flex" }}>
      <nav
        style={{
          borderRight: "solid 1px",
          padding: "1rem"
        }}
      >
        {groups.map(group => (
          <Link
            style={{ display: "block", margin: "1rem 0" }}
            to={`/groups/${group.id}`}
            key={group.id}
          >
            {group.name}
          </Link>
        ))}
      </nav>
      <Outlet />
    </div>
  );
}