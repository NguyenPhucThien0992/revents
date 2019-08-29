import React from "react";
import EventDetailedHeader from "./EventDetailedHeader";
import EventDetailedInfo from "./EventDetailedInfo";
import EventDetailedChart from "./EventDetailedChart";
import EventDetailedSidebar from "./EventDetailedSidebar";
import { Grid } from "semantic-ui-react";
import { connect } from "react-redux";

const EventDetailedPage = ({ event }) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <EventDetailedHeader event={event}></EventDetailedHeader>
        <EventDetailedInfo event={event}></EventDetailedInfo>
        <EventDetailedChart></EventDetailedChart>
      </Grid.Column>
      <Grid.Column width={6}>
        <EventDetailedSidebar
          attendees={event.attendees}
        ></EventDetailedSidebar>
      </Grid.Column>
    </Grid>
  );
};

const mapStateToProp = (state, ownProp) => {
  const eventId = ownProp.match.params.id; //1, 2
  let event = {};

  if (eventId && state.events.length > 0) {
    event = state.events.filter(event => event.id === eventId)[0];
  }
  return {
    event
  };
};

export default connect(
  mapStateToProp,
  null
)(EventDetailedPage);
