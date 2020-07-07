import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import {Form, FormGroup, Label, Input, CustomInput, Table } from 'reactstrap';
import "./Navbar.css";
import DataTableModifier from './DataTableModifier';
import DataTableSupprimer from './DataTableSupprimer';



class TabsVannes extends Component 
{
  //const [activeTab, setActiveTab] = useState('1');
  constructor(props) 
  {
    super(props);

    this.toggle = this.toggle.bind(this);

    this.state = {
      activeTab : '1',
      tableauVannes : [
        {id:1, nomVanne:'Vanne Tomates',            adresseIP:'198.178.22', type:'fruits'},
        {id:2, nomVanne:'Vanne Framboises/Mures',   adresseIP:'198.178.21', type:'légumes' },
        {id:3, nomVanne:'Vanne Herbes Aromatiques', adresseIP:'197.178.23', type:'herbes aromatiques'},
        {id:4, nomVanne:'Vanne Radis',              adresseIP:'198.178.26', type:'légumes'}
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
    //this.state.setActiveTab(tab);
  }
  /*const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }*/

  dataTableModif() {
    return this.state.tableauVannes.map((data, i) => {
      return <DataTableModifier obj={data} key={i} />;
    });
  }

  dataTableSuppr() {
    return this.state.tableauVannes.map((data, i) => {
      return <DataTableSupprimer obj={data} key={i} />;
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
          <Row>
            <Col>
            <Form className="formAddVanne">
              <p className="instructionsForm"><em>Saisissez les informations de la vanne à ajouter</em></p>
              
              <FormGroup>
                <Label>Nom de la vanne</Label>
                <Input type="text" name="nomVanne" id="nomVanne" placeholder="exemple : Vanne Radis" />
              </FormGroup>

              <FormGroup>
                <Label>Adresse IP</Label>
                <Input type="text" name="adresseIP" id="adresseIP" placeholder="XXX.XXX.XXX" />
              </FormGroup>
              
              <FormGroup>
                <Label for="exampleCheckbox">Radios</Label>
                <div>
                  <CustomInput type="radio" id="radioB_fruits"            name="customRadio" label="Fruits" />
                  <CustomInput type="radio" id="radioB_legumes"           name="customRadio" label="Légumes" />
                  <CustomInput type="radio" id="radioB_herbesAromatiques" name="customRadio" label="Herbes Aromatiques" />
                  <CustomInput type="radio" id="radioB_fleurs"            name="customRadio" label="Fleurs" />
                </div>
              </FormGroup>
                      
              <div className="text-center" >
              <Button color="info">Submit</Button>
              </div>
            </Form>

            </Col>
          </Row>
        </TabPane>

        <TabPane tabId="2">
          <Row>
            <Col className="modifVanne">
            <Table striped>
                    <thead>
                      <tr>
                        <th>id             </th>
                        <th>Nom Vanne      </th>
                        <th>Adresse IP     </th>
                        <th>Type plantation</th>
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
            <Col className="modifVanne">
            <Table striped>
                    <thead>
                      <tr>
                        <th>id       </th>
                        <th>Nom Vanne</th>
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

export default TabsVannes;