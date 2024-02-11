import { Space, Tag } from "antd";

const Skills = () => {
  return (
    <div>
      <h1 className="text-xl font-semibold mb-3 text-center">Skills</h1>
      <div className="text-center">
        <Space size={[0, 8]} wrap>
          <Tag>
            <div className="text-lg">Reactjs</div>
          </Tag>
          <Tag>
            <div className="text-lg">Nextjs</div>
          </Tag>
          <Tag>
            <div className="text-lg">Expressjs</div>
          </Tag>
          <Tag>
            <div className="text-lg">Mongodb</div>
          </Tag>
          <Tag>
            <div className="text-lg">Firebase</div>
          </Tag>
          <Tag>
            <div className="text-lg">Typescript</div>
          </Tag>
        </Space>
      </div>
    </div>
  );
};

export default Skills;
