import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { createEvent, updateEvent } from "./../eventAction";
import cuid from "cuid";
import TextInput from "./../../../app/common/form/TextInput";
import TextArea from "./../../../app/common/form/TextArea";
import SelectInput from "./../../../app/common/form/SelectInput";
import DateInput from "./../../../app/common/form/DateInput";
import {
  composeValidators,
  combineValidators,
  isRequired,
  hasLengthGreaterThan
} from "revalidate";
import moment from "moment";

// const emptyEvent = {
//   title: "",
//   date: "",
//   city: "",
//   venue: "",
//   hostedBy: ""
// };
const validate = combineValidators({
  title: isRequired({ message: "the event title is required" }),
  category: isRequired({ message: "Please provide a category" }),
  description: composeValidators(
    isRequired({ message: "Please enter a desciption" }),
    hasLengthGreaterThan(4)({
      message: "Description need to be at least 5 characters"
    })
  )(),
  city: isRequired("city"),
  venue: isRequired("venue")
});

const category = [
  { key: "drinks", text: "Drinks", value: "drinks" },
  { key: "culture", text: "Culture", value: "culture" },
  { key: "film", text: "Film", value: "film" },
  { key: "food", text: "Food", value: "food" },
  { key: "music", text: "Music", value: "music" },
  { key: "travel", text: "Travel", value: "travel" }
];
class EventForm extends Component {
  // state = {
  //   event: Object.assign({}, this.props.event)
  // };
  // componentDidMount() {
  //   if (this.props.selectedEvent !== null) {
  //     this.setState({
  //       event: this.props.selectedEvent
  //     });
  //   }
  // }
  // componentWillReceiveProps(nextProps) {
  //   // console.log("receive: ", this.props.selectedEvent);
  //   // console.log("next: ", nextProps.selectedEvent);
  //   if (nextProps.selectedEvent !== this.props.selectedEvent) {
  //     this.setState({
  //       event: nextProps.selectedEvent || emptyEvent
  //     });
  //   }
  // }
  onFormSubmit = values => {
    // console.log(values);
    // e.preventDefault();
    // if (this.state.event.id) {
    //   this.props.updateEvent(this.state.event);
    //   this.props.history.goBack();
    // } else {
    //   const newEvent = {
    //     ...this.state.event,
    //     id: cuid(),
    //     hostPhotoURL: "/assets/user.png"
    //   };
    //   this.props.createEvent(newEvent);
    //   this.props.history.push("/events");
    // }
    values.date = moment(values.date);
    if (this.props.initialValues.id) {
      this.props.updateEvent(values);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...values,
        id: cuid(),
        hostPhotoURL: "/assets/user.png",
        hostedBy: "Bob"
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/events");
    }
  };
  onTitleChange = e => {
    this.setState({
      event: {
        title: e.target.value
      }
    });
  };
  onInputChange = e => {
    const newEvent = this.state.event;
    newEvent[e.target.name] = e.target.value;
    this.setState({
      event: newEvent
    });
  };
  render() {
    // const { handleCancel } = this.props;
    // const { event } = this.state;
    const { invalid, submitting, pristine } = this.props;

    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details"></Header>
            <Form onSubmit={this.props.handleSubmit(this.onFormSubmit)}>
              <Field
                name="title"
                type="text"
                component={TextInput}
                placeholder="Give your event a name"
              >
                {/* <label>Event Title</label>
            <input
              name="title"
              onChange={this.onInputChange}
              value={event.title}
              placeholder="First Name"
            /> */}
              </Field>
              <Field
                name="category"
                type="text"
                options={category}
                // multiple={true}
                component={SelectInput}
                placeholder="Give your event about"
              ></Field>
              <Field
                name="description"
                type="text"
                component={TextArea}
                rows={2}
                placeholder="Tell us about yourself"
              ></Field>
              <Header
                sub
                color="teal"
                content="Event Location Details"
              ></Header>
              <Field
                name="city"
                type="text"
                component={TextInput}
                placeholder="Event City"
              ></Field>
              <Field
                name="venue"
                type="text"
                component={TextInput}
                placeholder="Event Venue"
              ></Field>
              <Field
                name="date"
                type="text"
                component={DateInput}
                dateFormat="YYYY/MM/DD HH:mm"
                timeFormat="HH:mm"
                showTimeSelect
                placeholder="Date and Time of event"
              ></Field>
              {/* <Form.Field>
                <label>Event Date</label>
                <input
                  name="date"
                  onChange={this.onInputChange}
                  value={event.date}
                  placeholder="Event Date"
                />
              </Form.Field>
              <Form.Field>
                <label>City</label>
                <input
                  name="city"
                  onChange={this.onInputChange}
                  value={event.city}
                  placeholder="City event is taking place"
                />
              </Form.Field>
              <Form.Field>
                <label>Venue</label>
                <input
                  name="venue"
                  onChange={this.onInputChange}
                  value={event.venue}
                  placeholder="Enter the Venue of the event"
                />
              </Form.Field>
              <Form.Field>
                <label>Hosted By</label>
                <input
                  name="hostedBy"
                  onChange={this.onInputChange}
                  value={event.hostedBy}
                  placeholder="Enter the name of person hosting"
                />
              </Form.Field> */}
              <Button
                disabled={invalid || submitting || pristine}
                positive
                type="submit"
              >
                Submit
              </Button>
              <Button type="button" onClick={this.props.history.goBack}>
                Cancel
              </Button>
            </Form>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProp = (state, ownProp) => {
  const eventId = ownProp.match.params.id;

  let event = {
    // title: "",
    // date: "",
    // city: "",
    // venue: "",
    // hostedBy: ""
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }

  return {
    initialValues: event
  };
};

const actions = {
  createEvent,
  updateEvent
};
export default connect(
  mapStateToProp,
  actions
)(
  reduxForm({ form: "eventForm", enableReinitialize: true, validate })(
    EventForm
  )
);
