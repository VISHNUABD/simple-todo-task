import React from "react";

class List extends React.Component {

    handle = (e) => {
        e.target.style.textDecoration = "line-through"
    }
    render() {
        return (
            <div>
                <ul className="list-group">
                    {
                        this.props.items.map(i => {
                            return (
                                <li key={i.id} className="list-group-item">
                                    <span onClick={this.handle} >{i.title}</span>
                                    <span className="float-right btn btn-outline-primary" onClick={this.props.handleDelete.bind(this, i.id)}>Delete</span>
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
