import React from "react";
import MeetupItem from "./MeetupItem";

export default function MeetupList({ listData }) {
  return (
    <ul className="space-y-3">
      {listData.map((meetup) => {
        return <MeetupItem key={meetup.id} {...meetup} />;
      })}
    </ul>
  );
}
