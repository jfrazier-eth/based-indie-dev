import { app } from "./app";
import { config } from "./config";
import { start as startQueues } from "./queues";

app.set("trust proxy", true);
app.listen(config.server.port, () => {
  console.log(`Server listening on port ${config.server.port}`);
});

startQueues();
