import React, { Component } from 'react';
import { Button } from 'reactstrap';


class DataTableSupprimer extends Component {
    render() {
        const {obj} = this.props;
        if (!obj) return null;

        return (
            <tr>
                <td>{obj.id}</td>
                <td>{obj.nomVanne}</td>
                <td><Button color="danger">Supprimer</Button></td>
            </tr>
        );
    }
}

export default DataTableSupprimer;