import run from "aocrunner"

const parseInput = Number

const dirs = [
  [+1, +0],
  [+0, -1],
  [-1, +0],
  [+0, +1],
]

const neighbors = [
  [+1, +0],
  [+0, -1],
  [-1, +0],
  [+0, +1],
  [+1, +1],
  [-1, -1],
  [+1, -1],
  [-1, +1],
]

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput)

  let x = 0
  let y = 0

  let i = 2
  let len = 1
  let currStraight = 0
  let cycle = 0
  let dir = 0

  while (i <= input) {
    x += dirs[dir][0]
    y += dirs[dir][1]

    currStraight++
    i++

    if (currStraight === len) {
      currStraight = 0
      cycle++
      dir = (dir + 1) % dirs.length
    }

    if (cycle === 2) {
      len++
      cycle = 0
    }
  }

  return Math.abs(x) + Math.abs(y)
}

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput)

  let x = 0
  let y = 0

  const values = new Map<string, number>([[`0:0`, 1]])

  let i = 2
  let len = 1
  let currStraight = 0
  let cycle = 0
  let dir = 0

  while (true) {
    x += dirs[dir][0]
    y += dirs[dir][1]

    const val = neighbors.reduce((sum, [dX, dY]) => {
      return sum + (values.get(`${x + dX}:${y + dY}`) ?? 0)
    }, 0)

    if (val > input) {
      return val
    }

    values.set(`${x}:${y}`, val)

    currStraight++
    i++

    if (currStraight === len) {
      currStraight = 0
      cycle++
      dir = (dir + 1) % dirs.length
    }

    if (cycle === 2) {
      len++
      cycle = 0
    }
  }
}

run({
  part1: {
    tests: [
      {
        input: "1",
        expected: 0,
      },
      {
        input: "12",
        expected: 3,
      },
      {
        input: "23",
        expected: 2,
      },
      {
        input: "1024",
        expected: 31,
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: "9",
        expected: 10,
      },
      {
        input: "100",
        expected: 122,
      },
      {
        input: "800",
        expected: 806,
      },
    ],
    solution: part2,
  },
})
