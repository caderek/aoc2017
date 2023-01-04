import run from "aocrunner"

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => line.split(" "))

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return input.filter(
    (passphrase) => new Set(passphrase).size === passphrase.length,
  ).length
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return input
    .map((passphrase) =>
      passphrase.map((word) => word.split("").sort().join("")),
    )
    .filter((passphrase) => new Set(passphrase).size === passphrase.length)
    .length
}

run({
  part1: {
    tests: [
      {
        input: `
          aa bb cc dd ee
          aa bb cc dd aa
          aa bb cc dd aaa
        `,
        expected: 2,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          abcde fghij
          abcde xyz ecdab
          a ab abc abd abf abj
          iiii oiii ooii oooi oooo
          oiii ioii iioi iiio
        `,
        expected: 3,
      },
    ],
    solution: part2,
  },
})
