import { Component } from "react";

export class AddContact extends Component {
    render() {
        return (
            <form onSubmit={this.props.addContact} action="">
                <input name='surname' type="text" />
                <input name='name' type="text" />
                <input name='phone' type="phone" />
                <button type="submit">Додати контакт</button>
            </form>
        )
    }
}