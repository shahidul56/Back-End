# Bookr - Back-End

Bookr is your source for all things Text Book. Picture the AirBNB of text books, a social platform for peer reviewed text books.

Bookr URL: https://bookr-bw.herokuapp.com

MVP: As a user I can log in, and see a list of text books. Each book will have a 5 star rating I can browse from. As a user I can review each book.

- Login Page - After a user logs in, they'll be directed to a home page.

- Navigation - Navigation is present on all pages, Users should know what page is active by clicking on a nav link and activating their tab.

- Home Page - Contains a list of Books laid out in a grid format.

- Single Book Page - Loads information about the book, Author, Name, Publisher and a scrolling list of reviews. Add review and delete book buttons present.

- Single Book Add Review Page - Clicking add review brings up a form (could be modal, could be its own page) where a user can add their review of the book. Clicking submit adds the review to the books information.

- Delete Book - Modal confirming the action, on confirmation user is routed back to the home page and book is gone from the list of books.

Stretch Goal: A link to each book will take me to a site where I can purchase a book and compare prices.

# API Documentation

## Authentication

### [POST] Registration

#### URL: https://bookr-bw.herokuapp.com/api/register

Payload: an object with the following properties

```
{
	"first_name": "Jane",
	"last_name": "Doe",
	"email":"jane@gmail.com",
	"password":"password"
}
```

Returns: an object with user data and authentication token.

```
{
    "user": {
        "id": 1,
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "jane@gmail.com"
    },

    "token": <user's token>
}
```

### [POST] Login

#### URL: https://bookr-bw.herokuapp.com/api/login

Payload: an object with the following properties

```
{

        "email": "jane@gmail.com",
        "password": "password"
}
```

Returns: an object with user data and authentication token.

```
{
    "user": {
        "id": 1,
        "first_name": "Jane",
        "last_name": "Doe",
        "email": "jane@gmail.com"
    },

    "token": <user's token>
}

```

## Restricted Routes

These routes can only be accessed when token is sent in the authorization header.

## Books

### [GET] Get all books

#### URL: https://bookr-bw.herokuapp.com/api/books

Returns: an array of objects with book details.

The endpoint already has a list of dummy books for use.

```
[
    {
        "id": 1,
        "isbn": "9781593275846",
        "title": "Eloquent JavaScript, Second Edition",
        "subtitle": "A Modern Introduction to Programming",
        "author": "Marijn Haverbeke",
        "publisher": "No Starch Press",
        "published": "2014-12-14T00:00:00.000Z",
        "description": "JavaScript lies at the heart of almost every modern web application, from social apps to the newest browser-based games. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
        "category": null
    },
    {
        "id": 2,
        "isbn": "9781449331818",
        "title": "Learning JavaScript Design Patterns",
        "subtitle": "A JavaScript and jQuery Developer's Guide",
        "author": "Addy Osmani",
        "publisher": "O'Reilly Media",
        "published": "2012-07-01T00:00:00.000Z",
        "description": "With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
        "category": null
    },
    {
        "id": 3,
        "isbn": "9781449365035",
        "title": "Speaking JavaScript",
        "subtitle": "An In-Depth Guide for Programmers",
        "author": "Axel Rauschmayer",
        "publisher": "O'Reilly Media",
        "published": "2014-02-01T00:00:00.000Z",
        "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        "category": null
    }
]
```

### [GET] Get book by ID

#### URL: https://bookr-bw.herokuapp.com/api/books/:id

Returns: an object with book details and an array of its reviews.

```
{
    "id": 3,
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "subtitle": "An In-Depth Guide for Programmers",
    "author": "Axel Rauschmayer",
    "publisher": "O'Reilly Media",
    "published": "2014-02-01T00:00:00.000Z",
    "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
    "category": null,
    "reviews": [
        {
            "id": 16,
            "reviewer": 1,
            "ratings": 2,
            "review": "Hard to understand",
            "book_id": 19
        }
    ]
}
```

### [DELETE] Delete a book

#### URL: https://bookr-bw.herokuapp.com/api/books/:id

Returns: an object with deleted book details.

```
deletedBook : {
    {
        "id": 3,
        "isbn": "9781449365035",
        "title": "Speaking JavaScript",
        "subtitle": "An In-Depth Guide for Programmers",
        "author": "Axel Rauschmayer",
        "publisher": "O'Reilly Media",
        "published": "2014-02-01T00:00:00.000Z",
        "description": "Like it or not, JavaScript is everywhere these days-from browser to server to mobile-and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
        "category": null
    }
}
```

## Reviews

### [POST] Post a review for a book

#### URL: https://bookr-bw.herokuapp.com/api/books/:id/review

Payload: an object with the following properties

```
{
    "book_id": :id,
    "review": "Awesome read!",
    "reviewer": <user ID>,
    "ratings": 5
}
```

Returns: an object with review details.

```
{
    "book_id": 3,
    "review": "Awesome read!",
    "reviewer": 1,
    "ratings": 5
}
```

### [GET] Get a review by ID

#### URL: https://bookr-bw.herokuapp.com/api/reviews/:id

Returns: an object with review details

```
{
    "id": 17,
    "reviewer": 2,
    "ratings": 1,
    "review": "I did not understand it",
    "book_id": 19
}
```

### [GET] Get reviews by user ID

#### URL: https://bookr-bw.herokuapp.com/api/user/:id/reviews

Returns: an array with user reviews 

```
[
    {
        "id": 4,
        "reviewer": 1,
        "ratings": 3,
        "review": "Loved the book",
        "book_id": 24
    },
    {
        "id": 16,
        "reviewer": 1,
        "ratings": 2,
        "review": "Hard to understand",
        "book_id": 19
    }
]
```
### [PUT] Edit review by ID

#### URL: https://bookr-bw.herokuapp.com/api/user/reviews/:id

Payload: an object with the following properties

```
{
    "book_id": :id,
    "review": "Awesome read!",
    "reviewer": <user ID>,
    "ratings": 4
}
```

Returns: an object with edited review details.

```
{
    "book_id": 3,
    "review": "Awesome read!",
    "reviewer": 1,
    "ratings": 4
}
```

### [DELETE] Delete a review

#### URL: https://bookr-bw.herokuapp.com/api/reviews/:id

Returns: an object with deleted review details.

```
{
    "deleted_review": {
        "id": 16,
        "reviewer": 1,
        "ratings": 2,
        "review": "Hard to understand",
        "book_id": 19
    }
}
```