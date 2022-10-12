function Header({title}) {
    return <h1>{ title ? `Hello ${title}` : "Hello World"}</h1>;
}
function ListOfNames() {
    const nameArr = ['John', 'Doe', 'Mary', 'Joseph'];
    return (
        <ul>
            {
                nameArr.map((name) => (
                    <li key={name}>{name}</li>
                ))
            }
        </ul>
    );
}
function CustomButton({name}) {
    const [count, setCount] = React.useState(0);
    const clickHandler = () => {
        setCount(count + 1);
    }
   return <button onClick={clickHandler}>{`${count} ${name}`}</button>;
}
function HomePage() {
    return (
        <div>
            <Header title="Develop. Preview. Ship. 🚀" />
            <Header />
            <ListOfNames />
            <CustomButton name="Like" />
            <CustomButton name="DisLike" />
        </div>
    );
}
ReactDOM.render(<HomePage />, app);