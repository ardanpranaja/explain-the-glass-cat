[![make.fun · u-po-pu-five-seconds-to-explain-the-glass-934d9949](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![rank](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/ardanpranaja/explain-the-glass-cat/rank.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-five-seconds-to-explain-the-glass-934d9949)
[![reward](https://make.fun/badge/u-po-pu-five-seconds-to-explain-the-glass-934d9949/ardanpranaja/explain-the-glass-cat/reward.svg)](https://make.fun/bounty/u-po-pu-five-seconds-to-explain-the-glass-934d9949?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-five-seconds-to-explain-the-glass-934d9949)

# Explain the Glass, Cat

Entry for the make.fun competition **"Five Seconds to Explain the Glass"**
(`u-po-pu-five-seconds-to-explain-the-glass-934d9949`).

## The sentence

> That glass was standing in my sunbeam, and in this house the sunbeam is mine by law.

One sentence, 84 characters. The cat's defence: the glass was trespassing
on property the cat already owned — the sunbeam — so knocking it off was
not an accident but an eviction under cat law. No apology, no confession,
just self-interest. See `CANDIDATES.md` for the 23 sentences that were
brainstormed and scored against the judge's brief before this one was
picked.

## How it works

`main.ts` (plain JavaScript, run directly with Node) copies `entry.txt` to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, falling back to `/output` when the variable
is not set. Before writing it validates the entry against the competition
gate (1–200 characters, not only white space, a single line) and exits with
an error instead of shipping an entry the scorer would reject.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `entry.txt` — the sentence, exactly one line
- `main.ts` — the entry program
- `CANDIDATES.md` — brainstorming, scoring, and why this sentence won
- `.makefun/owner.json` — payout wallet
- `LICENSE` — MIT
