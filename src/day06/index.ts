import run from "aocrunner"

const parseInput = (rawInput: string) => rawInput.split(/\s+/).map(Number)

const redistribute = (rawInput: string) => {
  const input = parseInput(rawInput)

  const seenBefore = new Map<string, number>([[input.join(), 0]])
  let cycle = 0

  while (true) {
    cycle++
    const max = Math.max(...input)
    const pos = input.findIndex((v) => v === max)

    input[pos] = 0

    let i = 1

    while (i <= max) {
      input[(pos + i) % input.length]++
      i++
    }

    const next = input.join()

    if (seenBefore.has(next)) {
      return { cycle, loopSize: cycle - seenBefore.get(next) }
    }

    seenBefore.set(next, cycle)
  }

  return
}

const part1 = (rawInput: string) => {
  return redistribute(rawInput).cycle
}

const part2 = (rawInput: string) => {
  return redistribute(rawInput).loopSize
}

run({
  part1: {
    tests: [
      {
        input: "0 2 7  0",
        expected: 5,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: "0 2 7  0",
        expected: 4,
      },
    ],
    solution: part2,
  },
})
