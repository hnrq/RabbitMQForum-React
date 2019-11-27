import React from "react";
import MessageModel from "models/Message";
import moment from "moment";
import classNames from "classnames";
import "./Message.scss";

type Props = {
  message: MessageModel,
  classList: string | Array<string>
};

const Message = ({ message: { content, createdOn }, classList }: Props) => (
  <div className={classNames("message", classList)}>
    <p className="text-white">{content}</p>
    <small className="text-white position-absolute">
      {moment
        .utc(new Date())
        .local()
        .format("LT")}
    </small>
  </div>
);

export default Message;
