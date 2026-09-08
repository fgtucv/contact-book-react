import { Component } from "react";
import { Pencil, Trash2 } from 'lucide-react';

export class ContactItem extends Component {
    render(){
        const { id, phone, name, surname} = this.props.contact
        return (
            <li>
                <h2>{surname} {name}</h2>
                <span>{phone}</span>
                {/* <button type="button"><Pencil/></button> */}
                <button type="button" onClick={() => {this.props.deletContact(id)}}><Trash2/></button>
            </li>
        )
    }
}