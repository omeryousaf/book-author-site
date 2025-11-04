export interface Book {
  title: string;
  desc: string[];
  cover: string;
}

export const books: Book[] = [
  {
    title: "You Are Silly",
    desc: [
      `You Are Silly is author Kiran Katib's response to the recent changes in the world. These changes most often affect our children. Whether living in advanced or developing countries, children face a range of challenges from struggles in education to the impact of global conflicts. Despite advancements and upgrades in education, many children in the world are not safe.`,
      `As civilized individuals, some assume that proper education and upbringing are benefits and rights reserved only for privileged children, but what about the rest? Accepting that even a small of percentage of children will be deprived of these basic rights and failing to recognize their voices contradicts our duty to humanity. Every child regardless of their circumstances deserves a loving, supportive, positive upbringing.`
    ],
    cover: `https://m.media-amazon.com/images/I/71lOnUChdkL._SY522_.jpg`
  },
  {
    title: "A Wink at Coronavirus",
    desc: [
      `"Hope in the times of Pandemic" is Kiran Katib's heartfelt response to a World turned upside down by COVID-19. This children's book is her endeavor to the demystify the challenges of the pandemic for young minds, offering clarity and comfort through engaging narratives. Her stories are crafted with a delicate balance of education and hope, guiding children to a place of understanding and resilience. With each page, she encourages her readers to look beyond the present and towards the horizon filled with promise and endless possibilities.`
    ],
    cover: `https://m.media-amazon.com/images/I/71L-+Kr5hUL._SY522_.jpg`
  },
];

