const crypto = require("crypto");

// declaring constants here
const MAX_PARTITION_KEY_LENGTH = 256;

exports.deterministicPartitionKey = (event) => {

  let candidate = "0";

  if (event) {
    candidate = event.partitionKey ?? createHash(convertToString(event));
    candidate = typeof candidate !== "string" ? convertToString(candidate) : candidate;
  }

  return candidate.length > MAX_PARTITION_KEY_LENGTH ? createHash(candidate) : candidate;
};

const createHash = (data) => {
  return crypto.createHash("sha3-512").update(data).digest("hex");
};

const convertToString = (data) => {
  return JSON.stringify(data);
}

exports.createHash = createHash;
exports.convertToString = convertToString;
