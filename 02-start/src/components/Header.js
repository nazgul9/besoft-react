import {Component} from "react"

class Header extends Component {

    state = {
        ItemValue: "asan"
    }

    OnInputChange = (e) => {
        const input = e.target

        this.setState({
            ItemValue:input.value
        })
    }

    onFormSubmit = (e) => {
        e.preventDefault() // не делай свою работу(не перезагружай сайт)
        if (this.state.ItemValue.trim() !== ""){
            this.props.addItem(this.state.ItemValue)
        }
        this.state.ItemValue = ""
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} id="myDIV" className="header">
                <h2>My To Do List</h2>
                <input value={this.state.ItemValue} onChange={this.OnInputChange} type="text" id="myInput" placeholder="Title..." /> 
                <button type="submit" className="addBtn">Add</button>
            </form>
            // onChange - это функция: "когда изменяется" - по словам агая 
        )
    }
}

export default Header // так мы разрешаем import