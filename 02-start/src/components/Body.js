import BodyItem from "./BodyItem";
import {Component} from "react"


class Body extends Component {
    render() {
        return (
            <ul id="myUL">
                {this.props.arr.map(
                    (item) => 
                        <BodyItem key={item} deleteItem = {this.props.deleteItem} item = {item}/>
                )}
            </ul>
        )
    }
}
// map - полезная функция, постепенно создает новыую строчку, и там каждую меняет на слова в массиве arr.

export default Body // так мы разрешаем import