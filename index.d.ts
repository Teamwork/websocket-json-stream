import { Duplex } from "stream";
import WebSocket from 'ws';

declare class WebSocketJSONStream extends Duplex {
  constructor(ws: WebSocket);
}

export default WebSocketJSONStream;
