import React, { Component } from 'react';
import { Button } from 'reactstrap';


class DataTableProgModifier extends Component {
    render() {
        const {obj} = this.props;
        if (!obj) return null;

        return (
            <tr>
                <td>{obj.id}</td>
                <td>{obj.nomProgramme}</td>
                <td>{obj.idVanne}</td>
                <td>{obj.jourDebut}</td>
                <td>{obj.jourFin}</td>
                <td>{obj.heureDebut}</td>
                <td>{obj.heureFin}</td>

                <td><Button color="info">Modifier</Button></td>
            </tr>
        );
    }
}

export default DataTableProgModifier;