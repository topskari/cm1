const Book = ({ title, author, year, onDelete }) => {

    function handleDelete() {
        onDelete(title);
    };

    return (
        <li>
            <span>{title}</span>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
}

export default Book;