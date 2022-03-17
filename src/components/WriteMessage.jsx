//form for writing new message
//  associated with button on Posts
import React, { useState } from "react";
import { sendMessage } from "../api/posts";

const WriteMessage = ({ postId, token, setWriteMessage, writeMessage }) => {
  const [message, setMessage] = useState("");
  const button = writeMessage.button;
  const storedToken = localStorage.getItem("token")

  const userSubmit = async (e) => {
    e.preventDefault();
    console.log(postId, storedToken, message , "postid token message")
    try {
      const result = await sendMessage(postId, storedToken, message);
      if (result.success) {
        //popup your message was sent
      }
      setWriteMessage({ idx: null, button: !button });
    } catch (error) {
      //popup could not deliver message}
    }
  };

  const ternaryFunction = () => {
    if (!button && writeMessage.idx == postId) {
      return false;
    }
    return true;
  };
  return (
    <div className="cardBtn">
      {storedToken ? (
        ternaryFunction() ? (
          <button
            type="button"
            onClick={() => setWriteMessage({ idx: postId, button: !button })}
          >
            Message
          </button>
        ) : (
          <form id="message" onSubmit={userSubmit}>
            <input
              type="text"
              placeholder="Write your message here"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></input>
            <button type="submit">Submit</button>
          </form>
        )
      ) : null}
    </div>
  );
};

export default WriteMessage;
