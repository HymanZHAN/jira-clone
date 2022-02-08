import { Form, Input, Select } from "antd";
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
    <Form style={{ marginBottom: "2rem" }} layout="inline">
      <Form.Item>
        <Input
          type="text"
          placeholder="项目名"
          value={param.name}
          onChange={($event) =>
            setParam({
              ...param,
              name: $event.target.value,
            })
          }
        />
      </Form.Item>
      <Form.Item>
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
      </Form.Item>
    </Form>
  );
};
