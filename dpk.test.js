const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Should returns the partition key", () => {
    const event = { partitionKey : "255"};
    expect(deterministicPartitionKey(event)).toBe("255");
  });

  it("Should returns the partition key as string when passing a numeric value", () => {
    const event = { partitionKey : 255};
    expect(deterministicPartitionKey(event)).toBe("255");
  });
});
