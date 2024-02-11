import { Badge, Card, Col, Row } from "antd";
import Link from "next/link";

const Playground = () => {
  return (
    <div>
      {" "}
      <div>
        <div>
          <h1 className="text-xl font-semibold mb-5 text-center">
            Recent Project
          </h1>
        </div>
        <Row justify="center" className="gap-20">
          {Projects?.map((project: any, index: number) => (
            <Col span={4} key={index}>
              <Link href={project?.link}>
                <Card
                  hoverable
                  style={{ width: 240 }}
                  cover={<img alt="example" src={project?.image} />}
                >
                  <div className="text-center mb-2">
                    {project?.type === "contribution" ? (
                      <Badge
                        className="site-badge-count-109"
                        count="Contributed"
                        style={{ backgroundColor: "#52c41a" }}
                      />
                    ) : (
                      <Badge
                        className="site-badge-count-109"
                        count="Self-Made"
                        style={{ backgroundColor: "blue" }}
                      />
                    )}
                  </div>
                  {/* <Meta title="Hackverse" description="Hackathon Platform" /> */}
                  <h4 className="text-lg font-bold">{project?.title}</h4>
                  <h6 className="text-md font-semibold text-gray-400">
                    {project?.slogan}
                  </h6>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
        {/* <div className="text-center underline text-blue-700 mt-3">
    <Link href="/projects">Show more projects</Link>
  </div> */}
      </div>
    </div>
  );
};

export default Playground;

const Projects = [
  {
    title: "Admin Panel",
    // slogan: "Hackathon Platform",
    link: "/playground/admin-panel",
    image: "./images/hackverse.png",
    type: "self-made",
  },
  {
    title: "Rich Text Editor",
    // slogan: "Restaurant Management Platform",
    link: "/playground/rich-text",
    image: "./images/ubaky.png",
    type: "self-made",
  },
];
