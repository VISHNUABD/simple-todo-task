import React from "react";
import Form from "./Form";
import List from "./List";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
class App extends React.Component {
    state = {
        list: []
    };
    componentDidMount()
    {
        axios
        .get("http://localhost:8080/to")
        .then(result=> {
            this.setState({
                list:result.data
            });
        })
.catch(error=>console.log(error));
    }
    addItem = (item) => {
        //console.log("new item", value);
        this.setState({
            list: [...this.state.list, item]
        })
    }
    handleDelete=item=>{
      this.setState(
        {
          list:this.state.list.filter(i=>i!==item)
        }
      )
    }

    render() {
        return (
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <Form addItem={this.addItem} /><br></br><br></br>
                        <List items={this.state.list} handleDelete={this.handleDelete}/>
                    </div>
                </div>
            </div>
        );
    }
};
export default App;
