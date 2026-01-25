% Axial Load Gradient Model
% Draft

# Overview

The Axial Load Gradient Model (ALGM) is a mechanics-first framework describing how load routes through the body. It defines a load function `L(z)` along the axial coordinate and classifies movement by the sign of the gradient `G(z) = dL/dz`.

This model is not medical advice and does not diagnose or treat disease.

# Definitions

- Axial coordinate: ground to head, normalized as `z in [0,1]`.
- Load function: `L(z)` is the net mechanical load transmitted at height `z`.
- Axial load gradient: `G(z) = dL/dz`.
  - `G(z) < 0`: load dissipates upward.
  - `G(z) > 0`: load accumulates upward.

![Axial load gradient states](figures/fig-load-gradient-a-vs-b.svg)

# Piecewise gradients

Define segment averages:

- `g_L`: lumbar
- `g_T`: thoracic
- `g_C`: cervical

State vector:

`S = (sign(g_L), sign(g_T), sign(g_C))`

![Piecewise gradients](figures/fig-piecewise-segments.svg)

# Tests

Use the Quick screen to detect likely positive segments. Branch into adaptive tests if any step fails, then select drills that bias the gradient negative and retest.

![Decision flow](figures/fig-decision-flow.svg)

# Training taxonomy

- Negative-gradient builders: backward locomotion, supported hangs, ER-before-extension drills.
- Positive-gradient excursions: sprint starts, jumps, heavy overhead press.
- Conditional drills: squats, deadlifts, rows (depend on execution).

# Safety

Do not test if there is acute injury, severe unremitting pain, fever, bowel/bladder changes, or progressive neurologic deficits.
