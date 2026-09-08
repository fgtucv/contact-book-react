import { Component } from "react";
import { ContactItem } from "../ContactItem/ContactItem.jsx";

export class ContsctList extends Component {
    render() {
        const data = this.props.contacts;
        return (
            <ul>
                {data.map(contact => <ContactItem key={contact.id} contact={contact} deletContact={this.props.deletContact}/>)}
            </ul>
        )
    }
}