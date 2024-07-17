import { config as conf } from "dotenv";
conf();

const _config = {
    port : process.env.PORT
}

export const config = Object.freeze(_config);
// making it read only by using Object.freeze() method