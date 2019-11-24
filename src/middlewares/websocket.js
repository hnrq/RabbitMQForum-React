import { Stomp } from "@stomp/stompjs";
import * as types from "types";
import * as actions from "actions";

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
                console.log(message.body);
                store.dispatch(
                  actions.receiveMessage(JSON.parse(message.body))
                );
              }
            );
          });
        } else {
          subscription = socket.subscribe(
            `/exchange/subject_logs/${action.payload.subject}`,
            message => {
              console.log(message.body);
              store.dispatch(actions.receiveMessage(JSON.parse(message.body)));
            }
          );
        }
        break;
      case types.WS_DISCONNECT:
        subscription.unsubscribe();
        console.log("unsubscribed");
        break;
      case types.SEND_MESSAGE:
        socket.send(
          `/exchange/subject_logs/${action.messageType}`,
          {},
          JSON.stringify(action.payload)
        );
      default:
        return next(action);
    }
  };
};

export default socketMiddleware();
