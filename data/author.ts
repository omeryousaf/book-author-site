export interface Author {
  name: string;
  title: string;
  description: string;
  bio: string[];
  tagline: string;
}

export const author: Author = {
  name: "Kiran Katib",
  title: "Author",
  description: "Official website of Kiran Katib – author, poet, and storyteller.",
  bio: [
    `Kiran’s personal journey has shaped her understanding of childhood experiences. Growing up in a small village and later moving to the city, she faced her own share of challenges. Her experiences as a mother have further deepened her connection to children and their needs.`,
    `With a bachelor’s degree in science and additional coursework in management and early years education, Kiran brings a unique perspective to her writing. Her passion for children’s literature began when she started reading to her son and discovered the power of stories to inspire and educate.`,
    `Through her writing, Kiran aims to create a positive impact on the world, one child at a time.`
  ],
  tagline: "Author, poet, and storyteller. Dive into a world of imagination, emotion, and truth — written straight from the heart."
};

