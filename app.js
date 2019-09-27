import React from "react";
import Form from "./Form";
import List from "./List";
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
    state = {
        list: []
    };
    componentDidMount() {

        axios.get(" http://localhost:8000/to")
            .then(result => {
                console.log(result)
                this.setState({
                    list: result.data
                })
            }).catch(err => console.log(err))
    }
    addItem = (inputText) => {
        //console.log("new item", item);
        axios.post(" http://localhost:8000/to", { title: inputText })
            .then(success => {
                console.log(success)
                this.setState({
                    list: [...this.state.list, success.data]
                })
            })
    }

    handleDelete = idd => {
        axios.delete(" http://localhost:8000/to/" + idd)
            .then(success => {
                if (success.status === 200 && success.statusText === "OK") {
                    this.setState({
                        list: this.state.list.filter(i => i.id !== idd)
                    })
                }
            })
        /*this.setState({
            list: this.state.list.filter(i => i.id !== item)
        })*/
    }

    render() {
        return (

            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <Form addItem={this.addItem} /><br></br><br></br>
                        <List items={this.state.list} handleDelete={this.handleDelete.bind(this)} />
                    </div>
                </div>
            </div>
        );
    }
};
export default App;
