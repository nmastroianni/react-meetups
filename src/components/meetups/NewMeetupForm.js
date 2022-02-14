import React, { useRef } from "react";

export default function NewMeetupForm(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddMeetup(meetupData);
  }
  return (
    <form className="p-4 grid grid-cols-1 gap-y-4" onSubmit={handleSubmit}>
      <label htmlFor="title">
        <h3 className="text-3xl text-sky-700 px-3">Title</h3>
        <input
          className="rounded px-3 bg-sky-100 mt-0 block w-full border-0 border-b-2 border-rose-200 focus:ring-0 focus:border-rose-300 focus:bg-white text-2xl text-rose-900"
          type="text"
          required
          id="title"
          ref={titleInputRef}
        />
      </label>
      <label htmlFor="image">
        <h3 className="text-3xl text-sky-700 px-3">Image</h3>
        <input
          className="rounded px-3 bg-sky-100 mt-0 block w-full border-0 border-b-2 border-rose-200 focus:ring-0 focus:border-rose-300 focus:bg-white text-2xl text-rose-900"
          type="url"
          required
          id="image"
          ref={imageInputRef}
        />
      </label>
      <label htmlFor="address">
        <h3 className="text-3xl text-sky-700 px-3">Address</h3>
        <input
          className="rounded px-3 bg-sky-100 mt-0 block w-full border-0 border-b-2 border-rose-200 focus:ring-0 focus:border-rose-300 focus:bg-white text-2xl text-rose-900"
          type="text"
          required
          id="address"
          ref={addressInputRef}
        />
      </label>
      <label htmlFor="description">
        <h3 className="text-3xl text-sky-700 px-3">Description</h3>
        <textarea
          className="rounded px-3 bg-sky-100 mt-0 block w-full border-0 border-b-2 border-rose-200 focus:ring-0 focus:border-rose-300 focus:bg-white text-2xl text-rose-900"
          type="text"
          required
          id="description"
          ref={descriptionInputRef}
        ></textarea>
      </label>
      <div className="text-right">
        <button
          type="submit"
          className="px-4 py-2 bg-rose-200 rounded hover:bg-rose-900 hover:text-rose-50 border border-rose-900 border-opacity-50"
        >
          Add Meetup
        </button>
      </div>
    </form>
  );
}
