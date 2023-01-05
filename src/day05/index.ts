import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split("\n").map(Number)

const part1 = (rawInput: string) => {
  const buffer = parseInput(rawInput)

  let pointer = 0
  let steps = 0

  while (pointer >= 0 && pointer < buffer.length) {
    const jump = buffer[pointer]
    buffer[pointer]++

    pointer += jump
    steps++
  }

  return steps
}

const part2 = (rawInput: string) => {
  const buffer = parseInput(rawInput)

  let pointer = 0
  let steps = 0

  while (pointer >= 0 && pointer < buffer.length) {
    const jump = buffer[pointer]
    buffer[pointer] += jump > 2 ? -1 : 1

    pointer += jump
    steps++
  }

  return steps
}

const testInput = `
0
3
0
1
-3
`

run({
  part1: {
    tests: [
      {
        input: testInput,
        expected: 5,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: testInput,
        expected: 10,
      },
    ],
    solution: part2,
  },
  // onlyTests: true,
})
