import React, { Component } from 'react';
import { Button } from 'reactstrap';


class DataTableModifier extends Component {
    render() {
        const {obj} = this.props;
        if (!obj) return null;

        return (
            <tr>
                <td>{obj.id}</td>
                <td>{obj.nomVanne}</td>
                <td>{obj.adresseIP}</td>
                <td>{obj.type}</td>

                <td><Button color="info">Modifier</Button></td>
            </tr>
        );
    }
}

export default DataTableModifier;