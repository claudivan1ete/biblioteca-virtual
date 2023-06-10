import React, { useState } from 'react';

const BookLibrary = () => {
  const [books, setBooks] = useState([]);

  // Função para adicionar um novo livro à biblioteca
  const addBook = (title, author, genre) => {
    const newBook = { title, author, genre };
    setBooks([...books, newBook]);
  };

  return (
    <div>
      <h1>Minha Biblioteca de Livros</h1>

      {/* Formulário para adicionar um novo livro */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { title, author, genre } = e.target.elements;
          addBook(title.value, author.value, genre.value);
          e.target.reset();
        }}
      >
        <label htmlFor="title">Título:</label>
        <input type="text" id="title" />

        <label htmlFor="author">Autor:</label>
        <input type="text" id="author" />

        <label htmlFor="genre">Gênero:</label>
        <input type="text" id="genre" />

        <button type="submit">Adicionar Livro</button>
      </form>

      {/* Lista de livros */}
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <strong>Título:</strong> {book.title}, <strong>Autor:</strong> {book.author}, <strong>Gênero:</strong> {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookLibrary;
