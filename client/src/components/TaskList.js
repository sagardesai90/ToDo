import React, { Component } from 'react';
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { getTasks } from '../actions/taskActions';
import PropTypes from 'prop-types';

class TaskList extends Component {
    componentDidMount() {
        this.props.getTasks();
    }

    render () {        
        const { tasks } = this.props.task;
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

TaskList.propTypes = {
    getTasks: PropTypes.func.isRequired,
    task: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    task: state.task
})

export default connect(mapStateToProps, { getTasks })(TaskList);