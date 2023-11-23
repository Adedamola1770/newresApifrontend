import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import image from "../assets/f0041d29-78f0-471b-a5b2-e45e30c64af6.jpeg";


const NewUsers = () => {
  return (
        <main className="container pt-4">
            <div className="row justify-content-evenly">
            <div className="col-sm-12 col-md-6 shadow-lg">
                <Form>
            <fieldset>
              <Form.Group className="mb-3 pt-5">
                <Form.Label htmlFor="" className="fw-bold">
                  Name:
                </Form.Label>
                <Form.Control
                  id=""
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor=""  className="fw-bold">
                  E-Mail:
                </Form.Label>
                <Form.Control
                  id="Email"
                  placeholder="E-mail"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledTextInput" className="fw-bold">
                  Profession:
                </Form.Label>
                <Form.Control
                  id="disabledTextInput"
                  placeholder="Disabled input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label htmlFor="disabledSelect" className="fw-bold">
                  Gender:
                </Form.Label>
                <Form.Select id="disabledSelect">
                  <option>Male</option>
                  <option>Female</option>
                </Form.Select>
              </Form.Group>

              <Button type="submit">Submit</Button>
            </fieldset>
          </Form>
                </div>
                <div className="d-none col-md-5 d-lg-block">
                    <img src={image} alt=""  className="shadow-sm"/>
                </div>
            </div>
        </main>
  );
};

export default NewUsers;
