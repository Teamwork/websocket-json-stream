import { Duplex } from "stream";
import WebSocket from 'ws';

declare class WebSocketJSONStream extends Duplex {
  private _emittedClose;
  private ws;
  constructor(ws: WebSocket);
  private _read(): void;
  private _write(object: any, encoding: string, callback: (error?: Error | null) => void): void;
  private _send(json: string, callback: (error?: Error | null) => void): void;
  private _final(callback: (error?: Error | null) => void): void;
  private _destroy(error: any, callback: (error: Error | null) => void): void;
  private _closeWebSocket(code: number, reason?: string, callback?: (error?: Error | null) => void): void;
}

export default WebSocketJSONStream;
