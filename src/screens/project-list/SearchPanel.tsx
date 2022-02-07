import { Input, Select } from "antd";
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
        <Input
          type="text"
          value={param.name}
          onChange={($event) =>
            setParam({
              ...param,
              name: $event.target.value,
            })
          }
        />
        <Select
          value={param.personId}
          onChange={(value) => setParam({ ...param, personId: value })}
        >
          <Select.Option value={""}>负责人</Select.Option>
          {users.map((user) => (
            <option value={user.id} key={user.id}>
              {user.name}
            </option>
          ))}
        </Select>
      </div>
    </form>
  );
};
