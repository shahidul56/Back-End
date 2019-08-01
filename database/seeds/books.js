exports.seed = function(knex) {
  return knex('books')
    .del()
    .then(function() {
      return knex('books').insert([
        {
          isbn: 9781593275846,
          title: 'Eloquent JavaScript, Second Edition',
          subtitle: 'A Modern Introduction to Programming',
          author: 'Marijn Haverbeke',
          published: '2014',
          publisher: 'No Starch Press',
          description:
            'JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/51-5ZXYtcML._SX377_BO1,204,203,200_.jpg',
          category: 'Programming'
        },
        {
          isbn: 9781449331818,
          title: 'Learning JavaScript Design Patterns',
          subtitle: "A JavaScript and jQuery Developer's Guide",
          author: 'Addy Osmani',
          published: '2012',
          publisher: "O'Reilly Media",
          description:
            "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
          url:
            'https://addyosmani.com/resources/essentialjsdesignpatterns/cover/cover.jpg',
          category: 'Programming'
        },
        {
          isbn: 9781449365035,
          title: 'Speaking JavaScript',
          subtitle: 'An In-Depth Guide for Programmers',
          author: 'Axel Rauschmayer',
          published: '2014',
          publisher: "O'Reilly Media",
          description:
            'Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.',
          url: 'http://speakingjs.com/es5/orm_front_cover.jpg',
          category: 'Programming'
        },
        {
          isbn: 9781593277574,
          title: 'Understanding ECMAScript 6',
          subtitle: 'The Definitive Guide for JavaScript Developers',
          author: 'Nicholas C. Zakas',
          published: '2016',
          publisher: 'No Starch Press',
          description:
            'ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.',
          url:
            'https://d2sofvawe08yqg.cloudfront.net/understandinges6/hero2x?1558023536',
          category: 'Programming'
        },
        {
          isbn: 9781491904244,
          title: "You Don't Know JS",
          subtitle: 'ES6 & Beyond',
          author: 'Kyle Simpson',
          published: '2015',
          publisher: "O'Reilly Media",
          description:
            'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the "You Don’t Know JS" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.',
          url:
            'https://github.com/getify/You-Dont-Know-JS/raw/master/es6%20%26%20beyond/cover.jpg',
          category: 'Programming'
        },
        {
          isbn: 9781449325862,
          title: 'Git Pocket Guide',
          subtitle: 'A Working Introduction',
          author: 'Richard E. Silverman',
          published: '2013',
          publisher: "O'Reilly Media",
          description:
            'This pocket guide is the perfect on-the-job companion to Git, the distributed version control system. It provides a compact, readable introduction to Git for new users, as well as a reference to common commands and procedures for those of you with Git experience.',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/41hZDooM2zL._SX302_BO1,204,203,200_.jpg',
          category: 'Programming'
        },
        {
          isbn: 9781449337711,
          title: 'Designing Evolvable Web APIs with ASP.NET',
          subtitle: 'Harnessing the Power of the Web',
          author: 'Glenn Block, et al.',
          published: '2014',
          publisher: "O'Reilly Media",
          description:
            'Design and build Web APIs for a broad range of clients—including browsers and mobile devices—that can adapt to change over time. This practical, hands-on guide takes you through the theory and tools you need to build evolvable HTTP services with Microsoft’s ASP.NET Web API framework. In the process, you’ll learn how design and implement a real-world Web API.',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/41hZDooM2zL._SX302_BO1,204,203,200_.jpg',
          category: 'Programming'
        },
        {
          isbn: 9780435025052,
          title: 'Interactive Mental Maths',
          subtitle: 'Working with the Whole Class',
          author: 'Peter Patilla',
          published: '1999',
          publisher: 'Heinemann',
          description:
            'Interactive Mental Maths series is designed to support the implementation of the National Numeracy Strategy and Improving Mathematics Education 5-14. ',
          url:
            'http://books.google.com/books/content?id=oVSFhYCK3zAC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Mathematics'
        },
        {
          isbn: 9780521296489,
          title: 'Philosophy of Mathematics',
          subtitle: 'Selected Readings',
          author: 'Paul Benacerraf & Hilary Putnam',
          published: '1983',
          publisher: 'Cambridge University Press',
          description:
            "The twentieth century has witnessed an unprecedented crisis in the foundations of mathematics, featuring a world-famous paradox (Russell's Paradox), a challenge to 'classical' mathematics from a world-famous mathematician (the 'mathematical intuitionism' of Brouwer), a new foundational school (Hilbert's Formalism), and the profound incompleteness results of Kurt Gödel.",
          url:
            'http://books.google.com/books/content?id=JjQrpYswtYEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Mathematics'
        },
        {
          isbn: 9781439835982,
          title: 'Concise Introduction to Pure Mathematics',
          subtitle: 'Third Edition',
          author: 'Martin Liebeck',
          published: '2010',
          publisher: 'CRC Press',
          description:
            'Accessible to all students with a sound background in high school mathematics, A Concise Introduction to Pure Mathematics, Third Edition presents some of the most fundamental and beautiful ideas in pure mathematics. It covers not only standard material but also many interesting topics not usually encountered at this level, such as the theory of solving cubic equations, the use of Euler’s formula to study the five Platonic solids, the use of prime numbers to encode and decode secret information, and the theory of how to compare the sizes of two infinite sets.',
          url:
            'http://books.google.com/books/content?id=JjQrpYswtYEC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Mathematics'
        },
        {
          isbn: 9780415666961,
          title: 'History in the Digital Age',
          subtitle: 'History in the Digital Age',
          author: 'Toni Weller',
          published: '2013',
          publisher: 'Routledge',
          description:
            'The digital age is affecting all aspects of historical study, but much of the existing literature about history in the digital age can be alienating to the traditional historian who does not necessarily value or wish to embrace digital resources.',
          url:
            'http://books.google.com/books/content?id=UZEfjUi1RyoC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'History'
        },
        {
          isbn: 9780759106543,
          title: 'Recording Oral History',
          subtitle: 'A Guide for the Humanities and Social Sciences',
          author: 'Valerie Raleigh Yow',
          published: '2013',
          publisher: 'Rowman Altamira',
          description:
            'In iRecording Oral History, Second Editioni, Valerie Raleigh Yow builds on the foundation of her classic text with a fully updated and substantially expanded new edition. One of the most widely used and highly regarded textbooks ever published in the field, Yows seminal work now includes illuminating new material on using the internet, an examination of the interactions between oral history and memory processes, and exploration into testimony analysis and the interpretation of meanings in different contexts.',
          url:
            'http://books.google.com/books/content?id=eB4KWDc18jUC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'History'
        },
        {
          isbn: 9781590519417,
          title: 'France in the World',
          subtitle: 'A New Global History',
          author: 'Patrick Boucheron, Stephane Gerson',
          published: '2019',
          publisher: 'Other Press (NY)',
          description:
            'Bringing together an impressive group of established and up-and-coming historians, this bestselling history conceives of France not as a fixed, rooted entity, but instead as a place and an idea in flux, moving beyond all borders and frontiers, shaped by exchanges and mixtures.',
          url:
            'http://books.google.com/books/content?id=wdKMDwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
          category: 'History'
        },
        {
          isbn: 9780195141931,
          title: 'Science, Technology, and Society',
          subtitle: 'An Encyclopedia',
          author: 'Sal P. Restivo',
          published: '2005',
          publisher: 'Oxford University Press on Demand',
          description:
            "Science, Technology, and Society' offers approximately 150 articles written by major scholars and experts from academic and scientific institutions worldwide. The theme is the functions and effects of science and technology in society and culture.",
          url:
            'http://books.google.com/books/content?id=A8C3m8rRba4C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Science'
        },
        {
          isbn: 9788189866594,
          title: 'Cell and Molecular Biology',
          subtitle: 'An Encyclopedia',
          author: 'Pragya Khanna',
          published: '2008',
          publisher: 'I. K. International Pvt Ltd',
          description:
            'Cell biology is a fascinating branch of biological sciences, providing answers to hitherto unanswered questions. It is the mother science to areas such as Molecular Biology, Molecular Genetics, Biotechnology, Recombinant DNA technology etc. ',
          url:
            'http://books.google.com/books/content?id=T2RD_j96s8AC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
          category: 'Science'
        },
        {
          isbn: 9780966972759,
          title: "The Physical Educator's Big Book of Sport Lead-Up Games",
          subtitle:
            'A complete K-8 sourcebook of team and lifetime sport activities for skill development, fitness and fun!',
          author: 'Guy Bailey',
          publisher: 'Educators Press',
          published: 'March 1, 2004',
          description:
            'Written by a nationally known physical education teacher and author, this one-of-a-kind book contains PE games that allow children to develop team and lifetime sport skills in an exciting and meaningful setting--leaving them motivated, challenged, and enthusiastic about sport participation. In all, this user-friendly resource contains field-tested activities proven to enhance sport skills in fourteen sport categories--the most comprehensive sport lead-up game book available to physical educators.',
          url:
            'https://m.media-amazon.com/images/I/51sOtYGXoZL._SR500,500_.jpg',
          category: 'Physical Education'
        },
        {
          isbn: 9781284034196,
          title: 'Lesson Planning for Elementary Physical Education',
          subtitle:
            'Meeting the National Standards & Grade-Level Outcomes (Shape America Set the Standard)',
          author: 'Shirley A Holt/Hale',
          publisher: 'Human Kinetics',
          published: 'February 29, 2016',
          description:
            'Elementary school physical educators looking for expert guidance in designing lessons that are aligned with SHAPE Americas National Standards and Grade-Level Outcomes need look no further.',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/51CDwl5TZjL._SX384_BO1,204,203,200_.jpg',
          category: 'Physical Education'
        },
        {
          isbn: 9781401302262,
          title: 'The Fine Art of Small Talk',
          subtitle:
            'How To Start a Conversation, Keep It Going, Build Networking Skills -- and Leave a Positive Impression!',
          author: 'Debra Fine',
          publisher: 'Hachette Books',
          published: 'October 1, 2005',
          description:
            'Nationally recognized communication expert Debra Fine reveals the techniques and strategies anyone can use to make small talk--in any situation. Do you spend an abnormal amount of time hiding out in the bathroom or hanging out at the buffet table at social gatherings? Does the thought of striking up a conversation with a stranger make your stomach do flip-flops? Do you sit nervously through job interviews waiting for the other person to speak? Are you a "Nervous Ned or Nellie" when it comes to networking? Then it\'s time you mastered The Fine Art of Small Talk.',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/41ounFtxvHL._SX329_BO1,204,203,200_.jpg',
          category: 'Fine Arts'
        },
        {
          isbn: 9780631230403,
          title: 'Sociology of the Arts ',
          subtitle: 'Exploring Fine and Popular Forms',
          author: 'Victoria D. Alexander',
          publisher: 'Wiley-Blackwell',
          published: 'January 31, 2003',
          description:
            'Sociology of the Arts is a comprehensive overview of the sociology of art and an authoritative work of scholarship by a leading expert in the field. The book synthesizes the various theoretical models of art sociology, and provides empirical examples as well as stimulating exemplars of sociological work on the arts. Case studies of art works are from both ends of the cultural spectrum: fine arts (theatre, dance, symphony, opera) and popular arts (Hollywood movies, pop music, pulp fiction, TV drama, comedy and advertising).',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/512CU4tWWBL._SX331_BO1,204,203,200_.jpg',
          category: 'Fine Arts'
        },
        {
          isbn: 9781305088931,
          title: 'Early Childhood Experiences in Language Arts',
          subtitle: 'Early Literacy ',
          author: 'Jeanne M. Machado',
          publisher: 'Wadsworth Publishing',
          published: 'January 1, 2015',
          description:
            "EARLY CHILDHOOD EXPERIENCE IN LANGUAGE ARTS: EARLY LITERACY, Eleventh Edition responds to national legislation, professional standards, and public concern about the development of young children's language and foundational literacy skills by providing current research-based instructional strategies in early language development. Activities throughout emphasize the relationship between listening, speaking, reading, writing (print), and viewing in language arts areas.",
          url:
            'https://images-na.ssl-images-amazon.com/images/I/51RMYrpeOHL._SX389_BO1,204,203,200_.jpg',
          category: 'Language Arts'
        },
        {
          isbn: 9780205325276,
          title: 'Grammar for Language Arts Teachers',
          subtitle: '',
          author: 'Alice Calderonello',
          publisher: 'Pearson',
          published: 'September 20, 2002',
          description:
            'With clear, accessible language and practical, concrete examples from real writing and teaching situations, Grammar for Language Arts Teachers (GLAT) provides a contextualized and comprehensive overview of English grammar.',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/41C%2BVS35E4L._SX331_BO1,204,203,200_.jpg',
          category: 'Language Arts'
        },
        {
          isbn: 9780134479262,
          title: 'Art History Vol 2',
          subtitle: '(6th edition)',
          author: 'Marilyn Stokstad , Michael W. Cothren',
          publisher: 'Pearson',
          published: '2017-01-14T00:00:00.000Z',
          description:
            'Welcoming, inclusive, engaging, and global. Art History brings the history of art to life for a new generation of students. It is global in scope, inclusive in its coverage, and warm and welcoming in tone. The guiding vision of Art History is that the teaching of art history survey courses should be filled with equal delight, enjoyment, and serious learning, while fostering an enthusiastic and educated public for the visual arts. The Sixth Edition has been revised to reflect new discoveries, recent research, and fresh interpretive perspectives, as well as to address the changing needs of both students and educators.',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/61umdume4gL._SX389_BO1,204,203,200_.jpg',
          category: 'History'
        },
        {
          isbn: 9780618690084,
          title: 'World History: Patterns of Interaction:',
          subtitle: 'Student Edition 2007',
          author: 'MCDOUGAL LITTEL',
          publisher: 'MCDOUGAL LITTEL',
          published: '2007-02-18T00:00:00.000Z',
          description: 'Book by MCDOUGAL LITTEL',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/51cJmvOL--L._SX369_BO1,204,203,200_.jpg',
          category: 'History'
        },
        {
          isbn: 9781323090220,
          title: 'Prentice Hall United States History',
          subtitle: 'Hardcover – 2014',
          author: 'Emma Lapsansky-Wener',
          publisher: 'Prentice Hall',
          published: '2014-01-01T00:00:00.000Z',
          description:
            'Fantastic book about US History, covering pre-history (before 1600) all the way through the turn of the millennium. Comprehensive, easy to understand and read. Grade level 11-12.',
          url:
            'https://images-na.ssl-images-amazon.com/images/I/51fJfFbPQ3L._SX373_BO1,204,203,200_.jpg',
          category: 'History'
        }
      ]);
    });
};
