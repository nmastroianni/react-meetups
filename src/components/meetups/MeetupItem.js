import React from "react";
import Card from "../ui/Card";
import { HiOutlineHeart } from "react-icons/hi";

export default function MeetupItem({ image, title, address, description }) {
  return (
    <Card>
      <li>
        <div>
          {image ? (
            <img
              src={image}
              alt={title}
              className="grayscale transition ease-in-out duration-500 hover:grayscale-0"
            />
          ) : (
            <picture className="grayscale transition ease-in-out duration-500 hover:grayscale-0">
              <source
                srcSet="https://placekitten.com/1280/720"
                media="(min-width: 720px)"
              />
              <img src="https://placekitten.com/720/360" alt="" />
            </picture>
          )}
        </div>
        <div className="p-3">
          <h3 className="text-3xl text-rose-800 my-2">{title}</h3>
          <address className="text-xl">{address}</address>
          <p className="text-lg my-2">{description}</p>
        </div>
        <div className="p-3">
          <button className="px-4 py-2 bg-rose-200 rounded hover:bg-rose-900 hover:text-rose-50 border border-rose-900 border-opacity-50">
            <HiOutlineHeart className="w-6 h-6 -mt-1 text-red-400 inline" />
            ADD TO FAVORITES
          </button>
        </div>
      </li>
    </Card>
  );
}
