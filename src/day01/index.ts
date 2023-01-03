import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("").map(Number)

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const matching: number[] = []

  for (let i = -1; i < input.length - 1; i++) {
    if (input.at(i) === input.at(i + 1)) {
      matching.push(input.at(i) as number)
    }
  }

  return matching.reduce((a, b) => a + b, 0)
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)
  const matching: number[] = []

  for (let i = 0; i < input.length; i++) {
    const j = (i + input.length / 2) % input.length

    if (input.at(i) === input.at(j)) {
      matching.push(input.at(i) as number)
    }
  }

  return matching.reduce((a, b) => a + b, 0)
}

run({
  part1: {
    tests: [
      {
        input: "1122",
        expected: 3,
      },
      {
        input: "1111",
        expected: 4,
      },
      {
        input: "1234",
        expected: 0,
      },
      {
        input: "91212129",
        expected: 9,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: "1212",
        expected: 6,
      },
      {
        input: "1221",
        expected: 0,
      },
      {
        input: "123425",
        expected: 4,
      },
      {
        input: "123123",
        expected: 12,
      },
      {
        input: "12131415",
        expected: 4,
      },
    ],
    solution: part2,
  },
  // onlyTests: true,
})
