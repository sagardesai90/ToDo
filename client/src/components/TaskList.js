import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';

class TaskList extends Component {
    state = {
        tasks: [
            { id: uuid(), name: 'Eggs'},
            { id: uuid(), name: 'Milk'},
            { id: uuid(), name: 'Juice'},
            { id: uuid(), name: 'Water'}
        ]
    }

    render () {
        const { tasks } = this.state;
        return(
            <Container>
                <Button
                color="dark"
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Task');
                    if(name) {
                        this.setState(state => ({
                            tasks: [...state.tasks, {id: uuid(), name}]
                        }));
                    }
                }}>Add Task</Button>
                <ListGroup>
                    <TransitionGroup className="shopping-list">
                        {tasks.map(({ id, name }) => (
                            <CSSTransition key={id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button
                                    className="remove-btn"
                                    color="danger"
                                    size="sm"
                                    onClick={() => {
                                        this.setState(state => ({
                                            tasks: state.tasks.filter(task => task.id !== id)
                                        }));
                                    }}
                                > &times;
                                </Button>
                                    {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}

export default TaskList;