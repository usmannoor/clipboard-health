const { deterministicPartitionKey, createHash } = require("./dpk");

const longerHash = `58540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e258540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e2`;

describe("deterministicPartitionKey", () => {
  it("Should return '0' when given no input", () => {
    expect(deterministicPartitionKey()).toBe("0");
  });

  it("Should returns the partition key", () => {
    const event = { partitionKey : "255"};
    expect(deterministicPartitionKey(event)).toBe("255");
  });

  it("Should returns the partition key as string when passing a numeric value", () => {
    const event = { partitionKey : 255};
    expect(deterministicPartitionKey(event)).toBe("255");
  });

  it("Should returns the hash key when partitionKey is null", () => {
    const hashString = '58540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e2';
    expect(deterministicPartitionKey({ partitionKey: null })).toBe(hashString);
  });

  it("Should returns a longer hash when a candidate is greate than MAX_PARTITION_KEY_LENGTH", () => {
    const hashString = '58540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e258540d4d440df8c6c6da0d79cfce715bc92953c6cde8be9f749790004ef2d5a7322d0fd5170eac9a37d57ee0cc975cfca068a60b01622529d9e0fd657f71b8e2';
    expect(deterministicPartitionKey({ partitionKey: longerHash })).toBe(hashString);
  });

});

describe("createHash", () => {
  it("should create a hash when a string is passed", () => {
    const hashString = '4bca2b137edc580fe50a88983ef860ebaca36c857b1f492839d6d7392452a63c82cbebc68e3b70a2a1480b4bb5d437a7cba6ecf9d89f9ff3ccd14cd6146ea7e7';
    expect(createHash('foo')).toBe(hashString);
  });
});

