let library = [];

function addBook(title, author, year, genre, pages) {
    let book = {
        title: title,
        author: author,
        year: year,
        genre: genre,
        pages: pages
    };
    library.push(book);
}

function removeBook(title) {
    let indexToRemove = -1;
    for (let i = 0; i < library.length; i++) {
        if (library[i].title === title) {
            indexToRemove = i;
            break;
        }
    }
    if (indexToRemove !== -1) {
        library.splice(indexToRemove, 1);
    }
}

function findBooksByAuthor(author) {
    let books = [];
    for (let i = 0; i < library.length; i++) {
        if (library[i].author === author) {
            books.push(library[i]);
        }
    }
    return books;
}

function filterBooksByGenre(genre) {
    let books = [];
    for (let i = 0; i < library.length; i++) {
        if (library[i].genre === genre) {
            books.push(library[i]);
        }
    }
    return books;
}

function genreReport() {
    let genreCounts = {};
    for (let i = 0; i < library.length; i++) {
        let genre = library[i].genre;
        if (genreCounts[genre] === undefined) {
            genreCounts[genre] = 1;
        } else {
            genreCounts[genre]++;
        }
    }
    return genreCounts;
}

function averagePagesReport() {
    let totalPages = 0;
    for (let i = 0; i < library.length; i++) {
        totalPages += library[i].pages;
    }
    return totalPages / library.length;
}

function sortBooksByYear() {
    return library.slice().sort((a, b) => b.year - a.year);
}

addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"));
console.log(filterBooksByGenre("Фэнтези"));
console.log(genreReport());
console.log(`Среднее количество страниц: ${averagePagesReport()}`);
console.log(sortBooksByYear());

removeBook("1984");
console.log(library);
