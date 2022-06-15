import './TodoList.css';

const TodoList = ({ children }) => (
    <section>
        <ul>{children}</ul>
    </section>
);

export { TodoList };
