// @flow

export default class Message {
  constructor(
    content: string = "new message",
    createdOn: Date,
    subject: string = "",
    id: string
  ) {
    this.content = content;
    this.createdOn = createdOn;
    this.subject = subject;
    this.id = id;
  }

  content: string;

  createdOn: Date;

  subject: string;

  id: string;
}
