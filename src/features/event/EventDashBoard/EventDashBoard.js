import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "./../../event/EventList/EventList";
import EventForm from "./../../event/EventForm/EventForm";
import cuid from "cuid";
import { connect } from "react-redux";
import { deleteEvent } from "./../eventAction";
class EventDashBoard extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOpen: false,
  //     selectedEvent: null
  //   };
  // }
  // arrow function
  handleFormOpen = () => {
    this.setState({
      selectedEvent: null,
      isOpen: true
    });
  };
  // handleCancel = () => {
  //   this.setState({
  //     isOpen: false
  //   });
  // };
  handleCreateEvent = newEvent => {
    // newEvent.id = cuid();
    // newEvent.PhotoUrl = "/assets/uer.png";
    // const updatedEvents = [...this.state.events, newEvent];
    // this.setState({
    //   events: updatedEvents,
    //   isOpen: false
    // });

    newEvent.id = cuid();
    newEvent.PhotoUrl = "/assets/uer.png";
    this.props.createEvent(newEvent);
    this.setState({
      isOpen: false
    });
  };
  //edit of CRUD
  // handleOpenEvent = eventToOpen => () => {
  //   this.setState({
  //     selectedEvent: eventToOpen,
  //     isOpen: true
  //   });
  // };
  handleUpdateEvent = updatedEvent => {
    // this.setState({
    //   events: this.state.events.map(event => {
    //     if (event.id === updatedEvent.id) {
    //       return Object.assign({}, updatedEvent);
    //     } else {
    //       return event;
    //     }
    //   }),
    //   isOpen: false,
    //   selectedEvent: null
    // });
    // this.props.updateEvent(updateEvent);
    // this.setState({
    //   isOpen: false,
    //   selectedEvent: null
    // });
  };
  handleDeleteEvent = eventId => () => {
    // const updatedEvents = this.state.events.filter(e => e.id !== eventId);
    // this.setState({
    //   events: updatedEvents
    // });

    this.props.deleteEvent(eventId);
  };
  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}></Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  events: state.events
});
const actions = {
  // createEvent,
  deleteEvent
  // updateEvent
};
export default connect(
  mapStateToProps,
  actions
)(EventDashBoard);
