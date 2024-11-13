## Self-Assessment of BookCollectionManager

### Correct Use of React Hooks (useState) and Controlled Forms
The `BookCollectionManager` project demonstrates a proficient use of React hooks, particularly `useState`. State management is handled efficiently, ensuring that the component re-renders appropriately when state changes occur. For example, the `useState` hook is used to manage the state of books and form inputs:

```jsx
const [books, setBooks] = useState([]);
const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [year, setYear] = useState("");
```

Controlled forms are implemented correctly, with form inputs bound to state variables, allowing for real-time updates and validation:

```jsx
<input
    type="text"
    placeholder="Enter book title..."
    value={title}
    onChange={(e) => setTitle(e.target.value)}
/>
<input
    type="text"
    placeholder="Enter author name..."
    value={author}
    onChange={(e) => setAuthor(e.target.value)}
/>
<input
    type="number"
    placeholder="Enter year..."
    value={year}
    onChange={(e) => setYear(e.target.value)}
/>
```

### Clean, Readable, and Well-Organized Code
The codebase is clean and well-organized, following best practices for readability and maintainability. Components are modular, with each component having a single responsibility. For instance, the `Book` component is responsible for rendering individual book details and handling deletion:

```jsx
const Book = ({ title, author, year, onDelete }) => {
    function handleDelete() {
        onDelete(title);
    }

    return (
        <li>
            <span>{title}</span>
            <p>Author: {author}</p>
            <p>Year: {year}</p>
            <button onClick={handleDelete}>Delete</button>
        </li>
    );
};
```

Code comments and meaningful variable names are used throughout, making it easy to understand the logic and flow of the application. The project structure is logical, with related files grouped together, enhancing the overall organization of the code.

### Git branching and deployment

Different components of the project were developed in their own branches, and once finished, merged successfully. Once all features were completed the project was deployed to Github and after brief testing seems to work as intended.


### Notes
Most of the assessment was generated with Github Copilot. 