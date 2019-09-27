class BookServices {
    constructor() {
        this.URI = '/api/books';
    }

    async getBooks() {
        const response = await fetch(this.URI);
        const books = await response.json();
        return books;
    }

    async postBook(book) {
        const res = await fetch(this.URI, {
            method: 'POST',
            body: book
        });
        const data = await res.json();
        console.log(data);
    }

    async deleteBook(BookId) {
        const res = await fetch(`${this.URI}/${BookId}`, {
            headers: {
                'Content-Type' : 'application/json'
            },
            method: 'DELETE'
        });
        const data = await res.json();
        console.log(data);
    }
}

export default BookServices;