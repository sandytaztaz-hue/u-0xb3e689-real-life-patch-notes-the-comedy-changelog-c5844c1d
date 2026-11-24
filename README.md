# Real-Life Patch Notes: The Comedy Changelog

[![make.fun](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![make.fun rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/sandytaztaz-hue/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![make.fun reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/sandytaztaz-hue/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

One-line entry for the [Real-Life Patch Notes: The Comedy Changelog](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d) bounty on make.fun: a software patch note for a bug in real life / human biology, at most 160 characters.

## The entry

> v1.3.7: fixed a bug where sneezing closed both eyes, including while driving at 120 km/h.

## How it works

`main.ts` (Node 22) writes the entry line to `entry.txt` in the output directory, resolved in this order: the `MAKEFUN_OUTPUT_DIR` environment variable, the `--output` flag, then `/output`. The output is deterministic: every run writes the exact same bytes.

```sh
node main.ts
node main.ts --output ./out
MAKEFUN_OUTPUT_DIR=./out node main.ts
```
