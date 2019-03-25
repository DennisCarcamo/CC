import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  FormText
} from "reactstrap";

export default class Formulario extends React.Component {
  render() {
    return (
      <div  style={{ border: "thin", display: "flex", justifyContent: "center" }}>
        <Form>
          <FormGroup>
            <Label for="lugararecoger">Lugar a Recoger</Label>
            <Input
              bsSize="sm"
              type="select"
              name="select"
              id="select"
              placeholder="select"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="fechaarecoger">Fecha a Recoger</Label>
            <Input
              bsSize="sm"
              type="date"
              name="date"
              id="date"
              placeholder="date"
            />
          </FormGroup>
          <FormGroup>
            <Label for="horaarecoger">Hora a Recoger</Label>
            <Input
              bsSize="sm"
              type="time"
              name="time"
              id="time"
              placeholder="time"
            />
          </FormGroup>
          <FormGroup>
            <Label for="lugardeentrega">Lugar de Entrega</Label>
            <Input
              bsSize="sm"
              type="select"
              name="select"
              id="select"
              placeholder="select"
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Label for="fechadeentrega">Fecha de Entrega</Label>
            <Input
              bsSize="sm"
              type="date"
              name="date"
              id="date"
              placeholder="date"
            />
          </FormGroup>
          <FormGroup>
            <Label for="horadeentrega">Hora de Entrega</Label>
            <Input
              bsSize="sm"
              type="time"
              name="time"
              id="time"
              placeholder="time"
            />
          </FormGroup>
          <Button>Agendar</Button>
        </Form>
        <br/>
      </div>
    );
  }
}
