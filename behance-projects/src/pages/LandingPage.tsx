import { ItemDisplayBubbleProps } from "../components/ItemDisplayBubble";

export const LandingPage = () => {
  const projectsList = [
    {
      title: "Finance Management Landing Page",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nam at augue velit. Etiam porttitor, augue non venenatis aliquam, 
        sem massa facilisis neque.`,
      url: "",
    },
    {
      title: "Project Management SAAS App Landing Page",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nam at augue velit. Etiam porttitor, augue non venenatis 
        aliquam, sem massa facilisis neque`,
      url: "",
    },
  ];
  return (
    <div>
      <p>Kayvia Harriott</p>
      <p>behance Projects</p>
      <div className="flex gap-2">
        {projectsList.map((item, index) => (
          <ItemDisplayBubbleProps
            key={index}
            title={item.title}
            description={item.description}
            url={item.url}
          />
        ))}
      </div>
    </div>
  );
};
