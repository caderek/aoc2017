import run from "aocrunner"

const parseInput = (rawInput: string) =>
  rawInput.split("\n").map((line) => (line.match(/\d+/g) ?? []).map(Number))

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return input.reduce(
    (checksum, line) => checksum + Math.max(...line) - Math.min(...line),
    0,
  )
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  return input.reduce((checksum, line) => {
    for (const [i, a] of line.entries()) {
      for (const [j, b] of line.entries()) {
        const divided = a / b
        if (i !== j && divided === Math.trunc(divided)) {
          return checksum + divided
        }
      }
    }

    return checksum
  }, 0)
}

run({
  part1: {
    tests: [
      {
        input: `
          5 1 9 5
          7 5 3
          2 4 6 8
        `,
        expected: 18,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
          5 9 2 8
          9 4 7 3
          3 8 6 5
        `,
        expected: 9,
      },
    ],
    solution: part2,
  },
  // onlyTests: true,
})
