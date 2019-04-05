import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addTask } from '../actions/taskActions';
import PropTypes from 'prop-types';
import uuid from 'uuid';
class TaskModal extends Component {
    state = {
        modal: false,
        name: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit = e => {
        e.preventDefault();

        const newTask = {
            id: uuid(),
            name: this.state.name
        }

        //add task through addTask action
        this.props.addTask(newTask);

        //close modal
        this.toggle();
    }

render() {
    return(
        <div>
            <Button
            color="dark"
            style={{marginBottom: '2rem'}}
            onClick={this.toggle}
            >Add Task</Button>
            <Modal
            isOpen={this.state.modal}
            toggle={this.toggle}
            >
            <ModalHeader toggle={this.toggle}>Add Task</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                        <Label for="task">Task</Label>
                        <Input
                            type="text"
                            name="name"
                            id="task"
                            placeholder="add to your todos"
                            onChange={this.onChange}
                            />
                            <Button
                                color="dark"
                                style={{marginTop: "2rem"}}
                                block
                            >Add Task</Button>
                    </FormGroup>
                </Form>
            </ModalBody>
            </Modal>
        </div>
    );
}
}

const mapStateToProps = state => ({
    item: state.item
})


export default connect(mapStateToProps, { addTask })(TaskModal);