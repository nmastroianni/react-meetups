import React from "react";
import NewMeetupForm from "../components/meetups/NewMeetupForm";
import Card from "../components/ui/Card";

export default function NewMeetup() {
  function addMeetupHandler(meetupData) {}
  return (
    <div className="max-w-screen-md mx-auto">
      <h2 className="text-3xl font-bold text-rose-900 text-center">
        Add a New Meetup
      </h2>
      <div className="h-1 bg-gradient-to-r from-transparent via-rose-700 to-transparent my-3" />
      <Card>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
      </Card>
    </div>
  );
}
