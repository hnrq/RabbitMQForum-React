// @flow
import * as types from "types";
import Message from "models/Message";
import { normalize } from "normalizr";
import type { AxiosError, AxiosResponse } from "axios";
import axios from "axios";
import type { Dispatch } from "react-redux";
import { message as messageSchema } from "schemas/message";

export const clearMessages = () => ({
  type: types.CLEAR_MESSAGES
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

export const createMessage = () => ({
  type: types.CREATE_MESSAGE_REQUEST
});

export const createMessageSuccess = (message: Message) => ({
  type: types.CREATE_MESSAGE_SUCCESS,
  payload: message
});

export const createMessageFailure = (error: AxiosError) => ({
  type: types.CREATE_MESSAGE_FAILURE,
  error
});

export const createMessageAction = (content: string, type: string) => (
  dispatch: Dispatch
) => {
  dispatch(createMessage());
  return axios
    .post("/api/messages", {
      content,
      type
    })
    .then(
      (response: AxiosResponse<Message>) => {
        const { entities } = normalize(response.data, messageSchema);
        dispatch(createMessageSuccess(entities.message));
      },
      (reject: AxiosError<any>) => {
        dispatch(createMessageFailure(reject));
      }
    );
};
