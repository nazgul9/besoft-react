import BodyItem from "./BodyItem";
import {Component} from "react"


class Body extends Component {
    state = { // state сохраняет все значения которые меняются, после его измнения работает сам React.
        arr: ["Hit the gym", "Pay bills", "Meet George", "Buy eggs", "Read a book", "Organize"]
    }   

    deleteItem = (deletItem) =>{
        this.setState(
            (state) => {
                const arr = state.arr.filter(
                    (item)=>item !== deletItem
                    return {arr}
                )
            }
        )-
    }

    render(){
        return (
            <ul id="myUL">
                {this.state.arr.map(
                    (item) => 
                        <BodyItem deleteItem = {this.deleteItem} item = {item}/>
                )}; 
            </ul>
        );
    }
};



// map - полезная функция, постепенно создает новыую строчку, и там каждую меняет на слова в массиве arr.

export default Body // так мы разрешаем import