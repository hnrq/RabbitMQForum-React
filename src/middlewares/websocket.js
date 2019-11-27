import { Stomp } from "@stomp/stompjs";
import * as types from "types";
import * as actions from "actions";
import { normalize } from "normalizr";
import { message as messageSchema } from "schemas/message";

const socketMiddleware = () => {
  let socket;
  let subscription;
  // the middleware part of this function
  return store => next => action => {
    switch (action.type) {
      case types.WS_CONNECT:
        if (!socket) {
          const ws = new WebSocket(action.payload.host);
          socket = Stomp.over(ws);
          socket.connect("guest", "guest", frame => {
            subscription = socket.subscribe(
              `/exchange/subject_logs/${action.payload.subject}`,
              message => {
                const { entities } = normalize(
                  JSON.parse(message.body),
                  messageSchema
                );
                store.dispatch(actions.createMessageSuccess(entities.message));
              }
            );
          });
        } else {
          subscription = socket.subscribe(
            `/exchange/subject_logs/${action.payload.subject}`,
            message => {
              const { entities } = normalize(
                JSON.parse(message.body),
                messageSchema
              );
              store.dispatch(actions.createMessageSuccess(entities.message));
            }
          );
        }
        break;
      case types.WS_DISCONNECT:
        subscription.unsubscribe();
        console.log("unsubscribed");
        break;
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
