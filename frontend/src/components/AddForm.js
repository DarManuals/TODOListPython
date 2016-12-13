import React from 'react';
import {Button,Modal,FormGroup,FormControl} from 'react-bootstrap';

class AddForm extends React.Component {

    constructor() {
        super();
        this.state = {
             showModal: false,
             priority: "2"
        };

        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);
        this.handlePriorityChange = this.handlePriorityChange.bind(this);
    }

    close() {
        this.setState({ showModal: false });
    };

    open() {
        this.setState({ showModal: true });
    };

    handleTextChange(e) {
        this.setState({name: e.target.value});
    };

    handlePriorityChange(e) {
        this.setState({priority: e.target.value});
    };

  render() {
    return (
      <div>
        <div>
            <Button bsStyle="success" bsSize="large" onClick={this.open} >Add</Button>
        </div>
        <br />
        <Modal show={this.state.showModal} onHide={this.close}>
                  <Modal.Header closeButton>
                    <Modal.Title>Add Your new task</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <FormGroup>
                           <h4>Task name</h4>
                           <FormControl componentClass="textarea"
                                 value={this.state.text}
                                 placeholder="Your message"
                                 onChange={this.handleTextChange} />

                           <h4>Task priority</h4>
                           <FormControl componentClass="select" onChange={this.handlePriorityChange}>
                                   <option value="3">HIGH</option>
                                   <option selected value="2">DEFAULT</option>
                                   <option value="1">LOW</option>
                           </FormControl>
                           <br />
                           <Button bsStyle="success" onClick={() => {
                                this.setState({name: "", priority: "2"});
                                this.close();
                                this.props.onAddTask(this.state.name, this.state.priority);
                                }}>Add</Button>
                    </FormGroup>

                  </Modal.Body>
                  <Modal.Footer>
                    <Button onClick={this.close}>Close</Button>
                  </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default AddForm;