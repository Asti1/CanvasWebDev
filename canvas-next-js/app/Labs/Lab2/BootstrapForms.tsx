"use client";
import { Button, Col, InputGroup, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

// import FormRange from "react-bootstrap/esm/FormRange";

export default function BootstrapForms() {
  return (
    <>
      <div id="wd-css-styling-forms">
        <h2>Forms</h2>
        <Form.Group className="mb-3" controlId="wd-email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="wd-textarea">
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </div>
      <div id="wd-css-styling-dropdowns">
        <h3>Dropdowns</h3>
        <Form.Select>
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </div>
      <div id="wd-css-styling-switches">
        <h3>Switches</h3>
        <Form.Check
          type="switch"
          checked={false}
          label="Unchecked switch checkbox input"
        />
        <Form.Check
          type="switch"
          checked={true}
          label="Checked switch checkbox input"
        />
        <Form.Check
          type="switch"
          checked={false}
          label="Unchecked disabled switch checkbox input"
          disabled
        />
        <Form.Check
          type="switch"
          checked={true}
          label="Checked disabled switch checkbox input"
          disabled
        />
      </div>
      <div id="wd-css-styling-range-and-sliders">
        <h3>Range</h3>
        <Form.Group controlId="wd-range1">
          <Form.Label>Example range</Form.Label>
          <Form.Range min="0" max="5" step="0.5" />
        </Form.Group>
      </div>
      <div id="wd-css-styling-addons">
        <h3>Addons</h3>
        <InputGroup className="mb-3">
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
          <Form.Control />
        </InputGroup>
        <InputGroup>
          <Form.Control />
          <InputGroup.Text>$</InputGroup.Text>
          <InputGroup.Text>0.00</InputGroup.Text>
        </InputGroup>
      </div>
      <div id="wd-css-responsive-forms-2">
        <h3>Responsive forms</h3>
        <Form>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              {" "}
              Email{" "}
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="email" placeholder="Email" />
            </Col>
            Copyright © 2025 Jose Annunziato. All rights reserved. 63
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label column sm={2}>
              {" "}
              Password{" "}
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="password" placeholder="Password" />
            </Col>
          </Form.Group>
          <fieldset>
            <Form.Group as={Row} className="mb-3">
              <Form.Label as="legend" column sm={2}>
                {" "}
                Radios{" "}
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="first radio"
                  name="formHorizontalRadios"
                  checked
                />
                <Form.Check
                  type="radio"
                  label="second radio"
                  name="formHorizontalRadios"
                />
                <Form.Check
                  type="radio"
                  label="third radio"
                  name="formHorizontalRadios"
                />
              </Col>
            </Form.Group>
          </fieldset>
          <Form.Group as={Row} className="mb-3">
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Check label="Remember me" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Col>
              <Button type="submit">Sign in</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    </>
  );
}
