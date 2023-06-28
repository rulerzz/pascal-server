import morgan, { StreamOptions } from "morgan";
import { IncomingMessage } from "http";
import logger from "./logger";

interface Request extends IncomingMessage {
  body: {
    query: String;
  };
}

const stream: StreamOptions = {
  write: (message) =>
    logger.http(message.substring(0, message.lastIndexOf("\n"))),
};

const skip = () => {
  const env = process.env.NODE_ENV || "development";
  return env !== "development";
};

const morganMiddleware = morgan(
  ":method :url :status :res[content-length] - :response-time ms\n",
  { stream, skip }
);

export default morganMiddleware;
