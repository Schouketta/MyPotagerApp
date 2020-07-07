import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Form, FormGroup, Label, Input, CustomInput, Table } from 'reactstrap';
import "./Navbar.css";
import DataTableProgModifier from './DataTableProgModif';
import DataTableProgSupprimer from './DataTableProgSuppr';

class TabsProgrammes extends Component 
{

    constructor(props) 
    {
        super(props);
        this.toggle = this.toggle.bind(this);
    
        this.state = {
          activeTab : '1',
          tableauProgrammes : [
            {id:1, nomProgramme:'Arrosage Tomate Soir',    idVanne :3, jourDebut:'XX/XX/XXXX', jourFin:'XX/XX/XXXX', heureDebut:'XX:XX', heureFin:'XX:XX'  },
            {id:2, nomProgramme:'Arrosage fleurs Juin',    idVanne :1, jourDebut:'XX/XX/XXXX', jourFin:'XX/XX/XXXX', heureDebut:'XX:XX', heureFin:'XX:XX' },
            {id:3, nomProgramme:'Arrosage fraises matin',  idVanne :2, jourDebut:'XX/XX/XXXX', jourFin:'XX/XX/XXXX', heureDebut:'XX:XX', heureFin:'XX:XX' },
            {id:4, nomProgramme:'Arrosage Radis Aube',     idVanne :2, jourDebut:'XX/XX/XXXX', jourFin:'XX/XX/XXXX', heureDebut:'XX:XX', heureFin:'XX:XX' }
          ],
        };
    
      }
    
    
      toggle(tab) {
        if(this.state.activeTab !== tab) 
        {
          this.setState({
            activeTab: tab
          });
        }
      }
    
      dataTableModif() {
        return this.state.tableauProgrammes.map((data, i) => {
          return <DataTableProgModifier obj={data} key={i} />;
        });
      }
    
      dataTableSuppr() {
        return this.state.tableauProgrammes.map((data, i) => {
          return <DataTableProgSupprimer obj={data} key={i} />;
        });
      }
    
      render(){
      return (
        <div>
          <Nav tabs>
    
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '1' })}
                onClick={() => { this.toggle('1'); }}
              >
                Ajouter
              </NavLink>
            </NavItem>
    
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '2' })}
                onClick={() => { this.toggle('2'); }}
              >
                Modifier
              </NavLink>
            </NavItem>
    
            <NavItem>
              <NavLink
                className={classnames({ active: this.state.activeTab === '3' })}
                onClick={() => { this.toggle('3'); }}
              >
                Supprimer
              </NavLink>
            </NavItem>
    
          </Nav>
    
          <TabContent activeTab={this.state.activeTab} >
            
            <TabPane tabId="1">
              
                
                <Form className="formAddProgr">
                
                  <p className="instructionsForm"><em>Saisissez les informations du programme à ajouter</em></p>
                  <Row>
                      <Col>
                  <FormGroup>
                    <Label>Nom Programme</Label>
                    <Input type="text" name="nomProgr" id="nomProg" placeholder="exemple : Arrosage tomates soir" />
                  </FormGroup>
                </Col>
                </Row>

                <Row>
                    <Col md='6'>
                        <FormGroup>
                            <Label for="exampleDate">Date début</Label>
                            <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                            />
                        </FormGroup>
                    </Col>
                
                <Col md='6'>
                <FormGroup>
                    <Label for="exampleTime">Heure début</Label>
                    <Input
                    type="time"
                    name="time"
                    id="exampleTime"
                    placeholder="time placeholder"
                    />
                </FormGroup>
                </Col>
                </Row>

                <Row>
                    <Col md='6'>
                        <FormGroup>
                            <Label for="exampleDate">Date fin</Label>
                            <Input
                            type="date"
                            name="date"
                            id="exampleDate"
                            placeholder="date placeholder"
                            />
                        </FormGroup>
                    </Col>
                
                <Col md='6'>
                <FormGroup>
                    <Label for="exampleTime">Heure fin</Label>
                    <Input
                    type="time"
                    name="time"
                    id="exampleTime"
                    placeholder="time placeholder"
                    />
                </FormGroup>
                </Col>
                </Row>
                 
                          
                  <div className="text-center" >
                  <Button color="info">Submit</Button>
                  </div>
                
                </Form>
    
              
              
            </TabPane>
    
            <TabPane tabId="2">
              <Row>
                <Col className="modifProg">
                <Table striped>
                        <thead>
                          <tr>
                            <th>id               </th>
                            <th>Nom              </th>
                            <th>Id vanne associée</th>
                            <th>Jour début       </th>
                            <th>Jour fin         </th>
                            <th>Heure début      </th>
                            <th>Heure fin        </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.dataTableModif()}
    
                        </tbody>
                      </Table>
                </Col>
              </Row>
            </TabPane>
    
            <TabPane tabId="3">
            <Row>
                <Col className="modifProg">
                <Table striped>
                        <thead>
                          <tr>
                            <th>id               </th>
                            <th>Nom              </th>
                            <th>Id vanne associée</th>
                            <th>Jour début       </th>
                            <th>Jour fin         </th>
                            <th>Heure début      </th>
                            <th>Heure fin        </th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.dataTableSuppr()}
    
                        </tbody>
                      </Table>
                </Col>
              </Row>
            </TabPane>
    
          </TabContent>
        </div>
      );
      }
}

export default TabsProgrammes;