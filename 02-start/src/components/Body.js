import BodyItem from "./BodyItem";

const Body = () => {

    const arr = [
        "Hit the gym", 
        "Pay bills", 
        "Meet George", 
        "Buy eggs", 
        "Read a book", 
        "Organize office"
    ]

    return (
        <ul id="myUL">
            {arr.map(
                (item) => 
                    <BodyItem item = {item}/>
            )}; 
        </ul>
    );
};

// map - полезная функция, постепенно создает новыую строчку, и там каждую меняет на слова в массиве arr.

export default Body // так мы разрешаем import