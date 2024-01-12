export type Bytea = Buffer;

export const toBytea = (str: string = ""): Bytea => {
  return Buffer.from(str);
};

export const fromBytea = (buffer: Bytea = Buffer.from("")): string => {
  return buffer.toString();
};
