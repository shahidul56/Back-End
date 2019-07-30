exports.seed = function(knex) {
  return knex('books')
    .del()
    .then(function() {
      return knex('books').insert([
        {
          id: 1,
          isbn: 9781593275846,
          title: 'Eloquent JavaScript, Second Edition',
          subtitle: 'A Modern Introduction to Programming',
          author: 'Marijn Haverbeke',
          published: '2014',
          publisher: 'No Starch Press',
          description: 'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
          url: 'https://images-na.ssl-images-amazon.com/images/I/51-5ZXYtcML._SX377_BO1,204,203,200_.jpg',
          category: 'Programming'
        },
        {
          id: 2,
          isbn: 9781449331818,
          title: 'Learning JavaScript Design Patterns',
          subtitle: "A JavaScript and jQuery Developer's Guide",
          author: 'Addy Osmani',
          published: '2012',
          publisher: "O'Reilly Media",
          description: "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
          url: 'https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg',
          category: 'Programming'
        },
        {
          id: 3,
          isbn: 9781449365035,
          title: 'Speaking JavaScript',
          subtitle: 'An In-Depth Guide for Programmers',
          author: 'Axel Rauschmayer',
          published: '2014',
          publisher: "O'Reilly Media",
          description: 'Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
          url: 'http://speakingjs.com/es5/orm_front_cover.jpg',
          category: 'Programming'
        },
        {
          id: 4,
          isbn: 9781593277574,
          title: 'Understanding ECMAScript 6',
          subtitle: 'The Definitive Guide for JavaScript Developers',
          author: 'Nicholas C. Zakas',
          published: '2016',
          publisher: 'No Starch Press',
          description: 'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
          url: 'https://d2sofvawe08yqg.cloudfront.net/understandinges6/hero2x?1558023536',
          category: 'Programming'
        },
        {
          id: 5,
          isbn: 9781491904244,
          title: "You Don't Know JS",
          subtitle: 'ES6 & Beyond',
          author: 'Kyle Simpson',
          published: '2015',
          publisher: "O'Reilly Media",
          description: 'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the "You Don’t Know JS" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.',
          url: 'https://github.com/getify/You-Dont-Know-JS/raw/master/es6%20%26%20beyond/cover.jpg',
          category: 'Programming'
        },
        {
          id: 6,
          isbn: 9781449325862,
          title: 'Git Pocket Guide',
          subtitle: 'A Working Introduction',
          author: 'Richard E. Silverman',
          published: '2013',
          publisher: "O'Reilly Media",
          description: 'This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.',
          url: 'https://images-na.ssl-images-amazon.com/images/I/41hZDooM2zL._SX302_BO1,204,203,200_.jpg',
          category: 'Programming'
        },
        {
          id: 7,
          isbn: 9781449337711,
          title: 'Designing Evolvable Web APIs with ASP.NET',
          subtitle: 'Harnessing the Power of the Web',
          author: 'Glenn Block, et al.',
          published: '2014',
          publisher: "O'Reilly Media",
          description: 'Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.',
          url: 'https://images-na.ssl-images-amazon.com/images/I/41hZDooM2zL._SX302_BO1,204,203,200_.jpg',
          category: 'Programming'
        },
        {
          id: 8,
          isbn: 9780435025052,
          title: 'Interactive Mental Maths',
          subtitle: 'Working with the Whole Class',
          author: 'Peter Patilla',
          published: '1999',
          publisher: 'Heinemann',
          description: 'Interactive Mental Maths series is designed to support the implementation of the National Numeracy Strategy and Improving Mathematics Education 5-14. ',
          url: 'http://books.google.com/books/content?id=oVSFhYCK3zAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Mathematics'
        },
        {
          id: 9,
          isbn: 9780521296489,
          title: 'Philosophy of Mathematics',
          subtitle: 'Selected Readings',
          author: 'Paul Benacerraf & Hilary Putnam',
          published: '1983',
          publisher: 'Cambridge University Press',
          description: 'The twentieth century has witnessed an unprecedented crisis in the foundations of mathematics, featuring a world-famous paradox (Russell\'s Paradox), a challenge to \'classical\' mathematics from a world-famous mathematician (the \'mathematical intuitionism\' of Brouwer), a new foundational school (Hilbert\'s Formalism), and the profound incompleteness results of Kurt Gödel.',
          url: 'http://books.google.com/books/content?id=JjQrpYswtYEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Mathematics'
        },
        {
          id: 10,
          isbn: 9781439835982,
          title: 'Concise Introduction to Pure Mathematics',
          subtitle: 'Third Edition',
          author: 'Martin Liebeck',
          published: '2010',
          publisher: 'CRC Press',
          description: 'Accessible to all students with a sound background in high school mathematics, A Concise Introduction to Pure Mathematics, Third Edition presents some of the most fundamental and beautiful ideas in pure mathematics. It covers not only standard material but also many interesting topics not usually encountered at this level, such as the theory of solving cubic equations, the use of Euler’s formula to study the five Platonic solids, the use of prime numbers to encode and decode secret information, and the theory of how to compare the sizes of two infinite sets.',
          url: 'http://books.google.com/books/content?id=JjQrpYswtYEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Mathematics'
        },
        {
          id: 11,
          isbn: 9780415666961,
          title: 'History in the Digital Age',
          subtitle: 'History in the Digital Age',
          author: 'Toni Weller',
          published: '2013',
          publisher: 'Routledge',
          description: 'The digital age is affecting all aspects of historical study, but much of the existing literature about history in the digital age can be alienating to the traditional historian who does not necessarily value or wish to embrace digital resources.',
          url: 'http://books.google.com/books/content?id=UZEfjUi1RyoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'History'
        },
        {
          id: 12,
          isbn: 9780759106543,
          title: 'Recording Oral History',
          subtitle: 'A Guide for the Humanities and Social Sciences',
          author: 'Valerie Raleigh Yow',
          published: '2013',
          publisher: 'Rowman Altamira',
          description: 'In iRecording Oral History, Second Editioni, Valerie Raleigh Yow builds on the foundation of her classic text with a fully updated and substantially expanded new edition. One of the most widely used and highly regarded textbooks ever published in the field, Yows seminal work now includes illuminating new material on using the internet, an examination of the interactions between oral history and memory processes, and exploration into testimony analysis and the interpretation of meanings in different contexts.',
          url: 'http://books.google.com/books/content?id=eB4KWDc18jUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'History'
        },
        {
          id: 13,
          isbn: 9781590519417,
          title: 'France in the World',
          subtitle: 'A New Global History',
          author: 'Patrick Boucheron, Stephane Gerson',
          published: '2019',
          publisher: 'Other Press (NY)',
          description: 'Bringing together an impressive group of established and up-and-coming historians, this bestselling history conceives of France not as a fixed, rooted entity, but instead as a place and an idea in flux, moving beyond all borders and frontiers, shaped by exchanges and mixtures.',
          url: 'http://books.google.com/books/content?id=wdKMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          category: 'History'
        },
        {
          id: 14,
          isbn: 9780195141931,
          title: 'Science, Technology, and Society',
          subtitle: 'An Encyclopedia',
          author: 'Sal P. Restivo',
          published: '2005',
          publisher: 'Oxford University Press on Demand',
          description: 'Science, Technology, and Society\' offers approximately 150 articles written by major scholars and experts from academic and scientific institutions worldwide. The theme is the functions and effects of science and technology in society and culture.',
          url: 'http://books.google.com/books/content?id=A8C3m8rRba4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Science'
        },
        {
          id: 15,
          isbn: 9788189866594,
          title: 'Cell and Molecular Biology',
          subtitle: 'An Encyclopedia',
          author: 'Pragya Khanna',
          published: '2008',
          publisher: 'I. K. International Pvt Ltd',
          description: 'Cell biology is a fascinating branch of biological sciences, providing answers to hitherto unanswered questions. It is the mother science to areas such as Molecular Biology, Molecular Genetics, Biotechnology, Recombinant DNA technology etc. ',
          url: 'http://books.google.com/books/content?id=T2RD_j96s8AC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Science'
        }
      ]);
    });
};
