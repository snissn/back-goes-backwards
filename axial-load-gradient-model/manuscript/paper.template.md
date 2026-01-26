---
title: Axial Load Gradient Model (ALGM)
subtitle: A testable load-routing framework (screen -> protocol -> retest)
date: {{DATE}}
lang: en-US
toc-title: Contents
---

::: {.callout .danger}
#### Medical scope (read first)
This is an engineering-style movement model, not medical advice. It does not diagnose or treat disease.
Do not run tests if you have red flags such as progressive neurologic deficit, bowel/bladder changes, fever,
severe unremitting pain, or recent significant trauma.
:::

Build: `{{GIT_SHA}}` · Data: tests `{{TESTS_VERSION}}`, drills `{{DRILLS_VERSION}}`.

# Abstract

The Axial Load Gradient Model (ALGM) is a mechanics-first way to talk about *load routing* through the body.
Instead of treating movement as a list of weak/tight muscles, it defines a single quantity:
a load function `L(z)` along an axial coordinate `z` (ground -> head), and its gradient `G(z) = dL/dz`.

The model is operational: you run a short screen, infer which segment(s) are likely accumulating load,
apply the smallest drill set that should flip the sign, and retest.

# How to use this paper

1. Read the model definitions once.
2. Run the Quick screen the same way each time.
3. If any step fails, run the program (CLI or web wizard) to select a minimal drill set.
4. Execute **one** drill, then retest. Stop as soon as the failure flips.

# Model

The gradient sign is the core classifier.

![Two gradient regimes (cartoon)](figures/fig-load-gradient-a-vs-b.svg)

## Core objects

::: {.callout .definition}
#### Axial coordinate
Define an axial coordinate `z` along the body: ground (low) to head (high), normalized to `z in [0,1]`.
:::

::: {.callout .definition}
#### Load function
Let `L(z)` be the net mechanical load transmitted at height `z` through the axial system.
This is not EMG and not "effort"; it is a force-transmission quantity (tension + compression + shear as an effective load).
:::

::: {.callout .definition}
#### Axial load gradient
Define `G(z) = dL/dz`. Interpreting the sign:

- `G(z) < 0`: load **dissipates upward** (downward-shedding bias)
- `G(z) > 0`: load **accumulates upward** (upward-accumulating bias)
:::

## Two regimes (operational)

These are not moral categories. They are control regimes you can detect with simple tests.

::: {.callout .heuristic}
#### State B: negative-gradient default
A mechanically organized baseline tends to show predominantly negative gradients: load is highest low and is progressively shed as height increases.
:::

::: {.callout .heuristic}
#### State A: positive-gradient default
A mechanically disorganized baseline tends to show predominantly positive gradients: load accumulates upward and the upper spine/neck become load sinks.
:::

## Piecewise gradients by segment

Approximate the global gradient as three segment averages:

- `g_L`: lumbar
- `g_T`: thoracic
- `g_C`: cervical

Define the sign-vector: `S = (sign(g_L), sign(g_T), sign(g_C))`.

![Piecewise gradient segments](figures/fig-piecewise-segments.svg)

::: {.callout .hypothesis}
#### Why segmentation helps
Symptoms and fatigue often localize where a segment accumulates load (`g > 0`) or where routing strategies change abruptly (an inversion locus).
:::

# Tests

The tests are designed to answer two questions quickly:

1. Which segment(s) are most likely accumulating load right now?
2. Can a short intervention flip the sign?

![Decision flow](figures/fig-decision-flow.svg)

::: {.callout .danger}
#### Do not test
Do not run tests if there is progressive weakness/numbness, bowel or bladder changes, fever, severe unremitting pain,
recent significant trauma, or other medical red flags.
:::

## Quick screen (SGS-120)

Run the screen exactly the same way each time. Use it as a **before/after** probe.

{{QUICK_SCREEN}}

## Interpretation (high-signal heuristics)

::: {.callout .heuristic}
#### What a "fail" means
A fail is not proof of a single anatomical cause. It is a routing signal: under that demand, a segment is likely acting as a load sink.
:::

Typical immediate signatures:

- If arm elevation fails: thoracic/cervical routing is suspect (arms load goes up instead of down).
- If backward step fails: lumbar/hip acceptance is suspect (load doesn't settle posteriorly).
- If breath probe fails: cervical load-bearing is likely present (neck/shoulders lift to inhale).

## Retest rule

::: {.callout .definition}
#### Retest-driven stopping
The goal is not to accumulate exercises. Apply one drill, retest, and stop as soon as the screen flips.
:::

If a segment does not flip, move to adaptive branches (future work) or increase tier carefully.

# Training

The training system is gradient-first.
Instead of asking "what muscle does this hit?", it asks:

- Does this drill tend to push the system toward **negative gradients** (downward shedding)?
- Or is it a **positive-gradient excursion** (useful later, but not for flipping a collapse pattern)?

::: {.callout .definition}
#### Dosing standard
To make drills comparable, keep doses stable (e.g. 4-6 breaths, 15-30s hangs, 45-90s backward walk). Then retest.
:::

## Tier 0-1: negative-gradient builders

These are the safest defaults for flipping common inversions.

{{DRILLS_T0_T1}}

## Tier 2: global integrators (use with care)

These can be powerful, but they are easier to contaminate with neck/rib bracing.

{{DRILLS_T2}}

## Positive-gradient excursions (context)

Some tasks inherently require upward accumulation (sprint starts, jumps, heavy overhead press). They are not "bad."
They are trained only when you can reliably return to negative gradients within a short window afterward.

## Minimal protocol selection (program behavior)

The program (CLI/wizard) does this:

1. Infer target segments from the Quick screen failures.
2. Choose the smallest drill set that pushes those segments negative without worsening others.
3. Order drills (cervical -> thoracic -> lumbar -> global).
4. Execute one drill, retest, stop when flipped.

::: {.callout .heuristic}
#### Why minimal matters
If you need 8 drills to feel better, you probably don't know which drill changed the sign.
Minimal protocols make the system testable and debuggable.
:::

# Program (CLI + web wizard)

CLI:

```bash
pnpm -C apps/cli start -- quick
```

Web:

Run the wizard from the website navigation ("/wizard").

# Limitations

This notebook is intentionally conservative about claims.

::: {.callout .definition}
#### What the model is
A testable hypothesis framework for movement organization: define a load routing quantity, classify by gradient sign, and validate changes by retest.
:::

::: {.callout .definition}
#### What the model is not
A diagnosis, a pathology detector, or a single-cause explanation for pain.
:::

## Practical constraints

- The sign of `G(z)` is inferred from proxies. Instrumentation would be needed for direct measurement.
- Many confounders can change test performance (fatigue, acute injury, vestibular issues, fear/guarding).
- Some tasks are expected to be positive-gradient excursions.

## Safety constraints

If you have numbness/tingling, progressive weakness, bowel/bladder changes, fever, severe unremitting pain, or recent significant trauma, do not test.

