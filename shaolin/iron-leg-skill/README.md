# Shaolin Iron-Leg Skill information sheets

Source: `20260718115903_001.pdf`, book pages 1–19 of *Shaolin Iron-Leg
Special Skills* (`少林铁腿绝技`).

The supplied scan contains Chapter 1 through the end of the ninth drill in
Section 2. It is partitioned into 19 standalone packets because the named
drills are not one continuous form:

1. Front Leg Press (`正压腿`) — figures 1-1–1-2
2. Side Leg Press (`侧压腿`) — figures 1-3–1-4
3. Rear Leg Press (`后压腿`) — figures 1-5–1-6
4. Crouching-Step Leg Press (`仆步压腿`) — figure 1-7
5. Front Held-Leg Lift (`正扳腿`) — figures 1-8–1-10
6. Side Held-Leg Lift (`侧扳腿`) — figures 1-11–1-12
7. Rear Held-Leg Lift (`后扳腿`) — figures 1-13–1-14
8. Front Split (`竖叉`) — figure 1-15
9. Side Split (`横叉`) — figure 1-16
10. Controlled Leg Hold (`控腿`) — figure 1-17
11. Front Kick (`正踢腿`) — figures 1-18–1-21
12. Side Kick (`侧踢腿`) — figures 1-22–1-25
13. Outward Crescent Kick (`外摆腿`) — figures 1-26–1-29
14. Inward Crescent Kick (`里合腿`) — figures 1-30–1-33
15. Snap Kick (`弹腿`) — figures 1-34–1-36
16. Side Thrust Kick (`侧踹腿`) — figures 1-37–1-39
17. Flying Kick (`腾空飞脚`) — figures 1-40–1-44
18. Tornado Kick (`旋风脚`) — figures 1-45–1-50
19. Aerial Outward Lotus Kick (`腾空外摆莲`) — figures 1-51–1-55

Each printed page has exactly two instructional rows. Source pages are
straightened before figure cropping, and chained movements repeat their
boundary posture across rows.

Rebuild:

```sh
scripts/prep_iron_leg_figures.sh
node scripts/build_iron_leg_packets.mjs
```
