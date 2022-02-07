import { useEffect, useState } from "react";
import { List } from "./List";
import { SearchPanel } from "./SearchPanel";
import { cleanObject, useDebounce } from "utils";
import { useHttp } from "services";

export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const debouncedParam = useDebounce(param, 2000);
  const [list, setList] = useState([]);
  const client = useHttp();

  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);

  useEffect(() => {
    client("users").then(setUsers);
  }, []);

  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List projects={list} users={users} />
    </div>
  );
};
