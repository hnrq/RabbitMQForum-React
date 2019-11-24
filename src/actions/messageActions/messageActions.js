// @flow
import * as types from "types";
import Message from "models/Message";
import { normalize } from "normalizr";
import { message as messageSchema } from "schemas/message";
import uuid from "uuid";

export const clearMessages = () => ({
  type: types.CLEAR_MESSAGES
});

export const receiveMessage = (message: Message) => ({
  type: types.RECEIVE_MESSAGE,
  payload: message
});

export const wsConnect = (host: string, subject: string) => ({
  type: types.WS_CONNECT,
  payload: {
    host,
    subject
  }
});

export const wsConnecting = (host: string) => ({
  type: types.WS_CONNECTING,
  host
});

export const wsConnected = (host: string) => ({
  type: types.WS_CONNECTED,
  host
});

export const wsDisconnect = (host: string) => ({
  type: types.WS_DISCONNECT,
  host
});

export const wsDisconnected = (host: string) => ({
  type: types.WS_DISCONNECTED,
  host
});

export const sendMessage = (content: string, messageType: string) => {
  const message = new Message(content, new Date(), messageType, uuid());
  const { entities } = normalize(message, messageSchema);
  return {
    type: types.SEND_MESSAGE,
    payload: entities.message,
    messageType
  };
};
