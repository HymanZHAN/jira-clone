import { User } from "models";

interface SearchParams {
  name: string;
  personId: string;
}

interface Props {
  users: User[];
  param: SearchParams;
  setParam: (params: SearchParams) => void;
}

export const SearchPanel = ({ param, setParam, users }: Props) => {
  return (
    <form>
      <div>
        <input
          type="text"
          value={param.name}
          onChange={($event) =>
            setParam({
              ...param,
              name: $event.target.value,
            })
          }
        />
        <select
          value={param.personId}
          onChange={($event) =>
            setParam({ ...param, personId: $event.target.value })
          }
        >
          <option value={""}>负责人</option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </select>
      </div>
    </form>
  );
};
