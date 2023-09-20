export function byteLength(value: any): number;
export function encodingLength(value: any): number;
export function encode(data: any, buffer?: Buffer, offset?: number): Uint8Array;
export function decode(data: ArrayBuffer, encoding?: string): unknown;
export function decode(data: ArrayBuffer, start?: number, encoding?: string): unknown;
export function decode(
  data: ArrayBuffer,
  start?: number,
  end?: number,
  encoding?: string,
): unknown;

declare const bencode: {
  decode: typeof decode,
  encode: typeof encode,
};

export default bencode;
