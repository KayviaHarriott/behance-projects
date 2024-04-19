import { ItemDisplayBubbleProps } from "../components/ItemDisplayBubble";

export const LandingPage = () => {
  const projectsList = [
    {
      title: "Finance Management Landing Page",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Nam at augue velit. Etiam porttitor, augue non venenatis aliquam, 
        sem massa facilisis neque.`,
      url: `/projects/1`,
      repo: ``,
      designcredit: {
        author: "John Doe",
        url: `https://www.behance.net/gallery/194256255/Finance-Management-Landing-Page-Finex`,
      },
    },
    {
      title: "Project Management SAAS App Landing Page",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam at augue velit. Etiam porttitor, augue non venenatis
        aliquam, sem massa facilisis neque`,
      url: "",
      repo: ``,
      designcredit: {
        author: "John Doe",
        url: "",
      },
    },
  ];
  return (
    <div className="px-[120px] py-[56px] flex flex-col gap-8">
      <div className="flex flex-col justify-center items-center">
        <p className="font-bold text-[32px]">Kayvia Harriott</p>
        <p>Behance Projects</p>
      </div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
        {projectsList.map((item, index) => (
          <ItemDisplayBubbleProps
            key={index}
            title={item.title}
            description={item.description}
            url={item.url}
            designcredit={item.designcredit}
            repo={item.repo}
          />
        ))}
      </div>
    </div>
  );
};
