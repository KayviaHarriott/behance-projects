import { ItemDisplayBubbleProps } from "../components/ItemDisplayBubble";

export const LandingPage = () => {
  const projectsList = [
    {
      title: "Finance Management Landing Page",
      description: "",
      url: "",
    },
    {
      title: "Project Management SAAS App Landing Page",
      description: "",
      url: "",
    },
  ];
  return (
    <div>
      <p>Kayvia Harriott</p>
      <p>behance Projects</p>
      {projectsList.map((item, index) => (
        <ItemDisplayBubbleProps
          key={index}
          title={item.title}
          description={item.description}
          url={item.url}
        />
      ))}
    </div>
  );
};
