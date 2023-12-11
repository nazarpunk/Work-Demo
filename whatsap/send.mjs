import {Keys} from "./keys.mjs";

/**
 * @param {string} message
 * @param {Keys} keys
 * @constructor
 */
export const Send = (message, keys) => {
    console.log(message, keys);
}

const keys = Keys


Send(`test ${Date.now()}`, keys);
