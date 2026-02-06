type HomePageData = {
  titles: string[];
  description: string;
  cta: {
    label: string;
    url: string;
  };
};

export const homePageData: HomePageData = {
  titles: ["Trace Your Jobs", "Organize yourself", "Track Your Progress"],
  description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ad
        repellendus tenetur officiis, numquam ratione obcaecati ducimus, aperiam
        odit velit temporibus delectus similique amet vel. Modi delectus eos
        asperiores suscipit!`,
  cta: {
    label: "Trace job",
    url: "/jobs",
  },
};
