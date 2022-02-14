import React from "react";
import MeetupList from "../components/meetups/MeetupList";
import { DUMMY_DATA } from "../data/dummy_data";

export default function AllMeetups() {
  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h2 className="text-3xl font-bold text-rose-900 text-center px-4">
        All Meetups Page (Home)
      </h2>
      <div className="h-1 bg-gradient-to-r from-transparent via-rose-700 to-transparent my-3" />
      <MeetupList listData={DUMMY_DATA} />
    </div>
  );
}
