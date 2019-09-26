import React from "react";
class List extends React.Component {
    markcomplete= e =>{
        e.target.style.textDecoration = "line-through"
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.items.map(i => {
                            return (
                                <li key={i.id1} className="list-group-item">
                                    <span onClick={this.markcomplete}>{i.name} </span>
                                    <span className="float-right btn btn-primary btn-lg"  onClick={this.props.handleDelete.bind(this,i)}>Delete</span>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}
export default List;
