import { Table } from "antd";
import { Project, User } from "models";

interface Props {
  projects: Project[];
  users: User[];
}

export const List = ({ projects, users }: Props) => {
  return (
    <Table
      pagination={false}
      columns={[
        {
          title: "名称",
          dataIndex: "name",
          sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
          title: "负责人",
          render: (value, project) => (
            <span>
              {users.find((user) => user.id === project.personId)?.name ||
                "未知"}
            </span>
          ),
        },
      ]}
      dataSource={projects}
    />
  );
};
