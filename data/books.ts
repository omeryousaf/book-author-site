export interface Book {
  title: string;
  desc: string[];
  cover: string;
  purchaseLinks?: { label: string; url: string }[];
}

export const books: Book[] = [
  {
    title: "You Are Silly",
    desc: [
      `You Are Silly is author Kiran Katib's response to the recent changes in the world. These changes most often affect our children. Whether living in advanced or developing countries, children face a range of challenges from struggles in education to the impact of global conflicts. Despite advancements and upgrades in education, many children in the world are not safe.`,
      `As civilized individuals, some assume that proper education and upbringing are benefits and rights reserved only for privileged children, but what about the rest? Accepting that even a small of percentage of children will be deprived of these basic rights and failing to recognize their voices contradicts our duty to humanity. Every child regardless of their circumstances deserves a loving, supportive, positive upbringing.`
    ],
    cover: `https://m.media-amazon.com/images/I/71lOnUChdkL._SY522_.jpg`,
    purchaseLinks: [
      { label: 'Apple Books', url: 'https://books.apple.com/se/book/you-are-silly/id6753692781' },
      { label: 'Google Books', url: 'https://books.google.com.pk/books?id=7sOMEQAAQBAJ&printsec=frontcover&source=gbs_ge_summary_r&cad=0#v=onepage&q&f=false' },
      { label: 'Google Play Store', url: 'https://play.google.com/store/books/details/Kiran_Katib_You_Are_Silly?id=7sOMEQAAQBAJ' },
      { label: 'Barnes & Noble', url: 'https://www.barnesandnoble.com/w/you-are-silly-kiran-katib/1148468223' },
      { label: 'Booktopia', url: 'https://www.booktopia.com.au/you-are-silly-kiran-katib/ebook/9781662952876.html' },
      { label: 'Indigo', url: 'https://www.indigo.ca/en-ca/you-are-silly/f6c0f4fe-9e7b-3774-a83d-f78b2c032bd2.html' },
      { label: 'Morawa', url: 'https://www.morawa.at/detail/ISBN-9781662952869/Katib-Kiran/You-Are-Silly' },
      { label: 'Patogupirkti', url: 'https://www.patogupirkti.lt/knyga/you-are-silly-9781662952869.html?__cf_chl_rt_tk=Td9N7VTpJR3FgUFIx8RrraePBxWVozQhRb1DS2WfLcs-1760458887-1.0.1.-2HNEf03g8p0Xz8sz7fVUxIvgifqkQEE2jCXZZFrGTjw' },
      { label: 'Fnac', url: 'https://www.fnac.com/livre-numerique/a22175731/Kiran-Katib-You-Are-Silly' },
      { label: 'Hugendubel', url: 'https://www.hugendubel.de/de/buch_kartoniert/kiran_katib-you_are_silly-51890481-produkt-details.html' },
      { label: 'Gandhi', url: 'https://www.gandhi.com.mx/you-are-silly-9781662952876/p' },
      { label: 'Bokus', url: 'https://www.bokus.com/bok/9781662952852/you-are-silly/' },
      { label: 'Saxo', url: 'https://www.saxo.com/dk/you-are-silly_bog_9781662952852' },
      { label: 'PChome 24h', url: 'https://24h.pchome.com.tw/books/prod/DJBQ38-D900JBZF4' },
      { label: 'Goodreads', url: 'https://www.goodreads.com/author/show/47315135.Kiran_Katib' },
      { label: 'Rakuten Books (JP)', url: 'https://books.rakuten.co.jp/rk/f6c0f4fe9e7b3774a83df78b2c032bd2/' },
      { label: 'Porrúa', url: 'https://porrua.mx/you-are-silly-9781662952876.html' },
      { label: 'Magers & Quinn', url: 'https://www.magersandquinn.com/product/YOU-ARE-SILLY/28607920' }
    ]
  },
  {
    title: "A Wink at Coronavirus",
    desc: [
      `"Hope in the times of Pandemic" is Kiran Katib's heartfelt response to a World turned upside down by COVID-19. This children's book is her endeavor to the demystify the challenges of the pandemic for young minds, offering clarity and comfort through engaging narratives. Her stories are crafted with a delicate balance of education and hope, guiding children to a place of understanding and resilience. With each page, she encourages her readers to look beyond the present and towards the horizon filled with promise and endless possibilities.`
    ],
    cover: `https://m.media-amazon.com/images/I/71L-+Kr5hUL._SY522_.jpg`
  },
];

