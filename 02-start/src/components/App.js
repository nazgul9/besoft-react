import Header from "./Header" 
import Body from "./Body"
import { Component } from "react"

// const App = () => { // это функция - в React JS называется компонент
//     // const name = "Ratmir"; // эта переменная используется внизу
//     // const age = 17;
//     return (
//         <div>
//             <Header/>,
//             <Body/>
//         </div>
//     );
// };

class App extends Component {

    state = { 
        arr: ["Hit the gym", "Pay bills", "Meet George", "Buy eggs", "Read a book", "Organize"]
    }

    deleteItem = (deletItem) =>{
        this.setState(
            (state) => {
                const arr = state.arr.filter(
                    (item) => item !==deletItem)
                    return {arr}
            })    
    }

    addItem = (item) => {
        this.setState( // меняет state(состяние)
            (state)=>{
                if (state.arr.find((todo) => todo === item) === undefined) {
                    const arr = [item,...state.arr]
                    return {arr}
                } else if (state.arr.find((todo) => todo === item) !== undefined) {
                    let num = "("+1+")"
                    const arr = [item+ num,...state.arr]
                    return {arr}
                }
            }
        )
    }

    render() {
        return (
            <div>
                <Header addItem={this.addItem} />
                <Body deleteItem={this.deleteItem} arr = {this.state.arr} />    
            </div>
        )
    }
}

export default App;