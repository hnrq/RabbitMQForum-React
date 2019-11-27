// @flow

export default class Message {
  constructor(
    content: string = "new message",
    createdOn: Date,
    type: string = "",
    id: string
  ) {
    this.content = content;
    this.createdOn = createdOn;
    this.type = type;
    this.id = id;
  }

  content: string;

  createdOn: Date;

  type: string;

  id: string;
}
