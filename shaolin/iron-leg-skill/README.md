# Shaolin Iron-Leg Skill information sheets

Sources: `20260718115903_001.pdf` and `20260718121433_001.pdf`, book
pages 1–58 of *Shaolin Iron-Leg Special Skills* (`少林铁腿绝技`).

The scans contain all of Chapter 1 and Chapter 2 through figure 2-100. The
named drills are not one continuous form, so the material is partitioned into
59 standalone packets.

## Packet partition

- 01–10: Chapter 1 flexibility training, figures 1-1–1-17
- 11–19: Chapter 1 speed training, figures 1-18–1-55
- 20–28: Chapter 1 strength and conditioning, figures 1-56–1-74
- 29–43: Chapter 2 fundamental footwork, figures 2-1–2-53
- 44–59: Chapter 2 fundamental body methods, figures 2-54–2-100

The 40 packets appended from the second scan are:

20. Squat Holding a Stone Lock (`提石锁下蹲`) — figure 1-56
21. Hooked Stone-Lock Leg Extensions (`脚勾石锁腿屈伸`) — figure 1-57
22. Weighted Side Horse-Step Squat (`负重侧马步蹲立`) — figures 1-58–1-59
23. Weighted Squat (`负重蹲起`) — figure 1-60
24. Weighted Heel Raise (`负重提踵`) — figure 1-61
25. Sandbag Leg Training (`沙绑腿训练法`) — figures 1-62–1-65
26. Leg Conditioning Strikes (`排打`) — figures 1-66–1-67
27. Post Kicking (`踢桩`) — figures 1-68–1-71
28. Sandbag Kicking (`踢沙袋`) — figures 1-72–1-74
29. Advance Step (`上步`) — figures 2-1–2-3
30. Entering Step (`进步`) — figures 2-4–2-5
31. Following Step (`跟步`) — figures 2-6–2-8
32. Follow-and-Advance Step (`跟进步`) — figures 2-9–2-11
33. Retreat Step (`退步`) — figures 2-12–2-14
34. Inserting Step (`插步`) — figures 2-15–2-16
35. Straddling Cross Step (`跨步`) — figures 2-17–2-20
36. Withdrawal Step (`撤步`) — figures 2-21–2-24
37. Beating Step (`击步`) — figures 2-25–2-30
38. Switch Jump Step (`换跳步`) — figures 2-31–2-34
39. Vertical Jump Step (`纵跳步`) — figures 2-35–2-37
40. Kneeling Step (`跪步`) — figures 2-38–2-44
41. Hooking Pivot Step (`扣步`) — figures 2-45–2-47
42. Cross-Follow Step (`跨跟步`) — figures 2-48–2-50
43. Leaping Step (`跃步`) — figures 2-51–2-53
44. Side Turn (`侧身`) — figures 2-54–2-55
45. Forward Bend (`前俯身`) — figures 2-56–2-57
46. Backward Lean (`后仰身`) — figures 2-58–2-59
47. Side Lean (`侧倒身`) — figures 2-60–2-61
48. Rear Turn (`后转身`) — figures 2-62–2-64
49. Crouching Body Shift (`下蹲身`) — figures 2-65–2-66
50. Evasive Body Shift (`闪身`) — figures 2-67–2-68
51. Aerial Rear Turn (`腾空后转身`) — figures 2-69–2-72
52. Body Flip / Overturn (`翻身`) — figures 2-73–2-78
53. Side Fall to Ground (`侧身倒地`) — figures 2-79–2-83
54. Twisting Level Turn (`拧身平转`) — figures 2-84–2-87
55. Probing Body Extension (`探身`) — figures 2-88–2-89
56. Swaying Body (`摇身`) — figures 2-90–2-92
57. Aerial Flying Body (`腾空飞身`) — figures 2-93–2-95
58. Forward Turn (`前转身`) — figures 2-96–2-97
59. Aerial Forward Turn (`腾空前转身`) — figures 2-98–2-100

Each printed page has exactly two instructional rows. Source pages are
straightened before figure cropping, and chained movements repeat their
boundary posture across rows. The full set contains 174 cleaned figure assets.

## Grouped printable edition

For practice and duplex printing, `grouped-print/` also provides one complete
workbook and five separate themed booklets:

- Flexibility & Leg Control
- Kicks & Aerial Kicks
- Strength & Conditioning
- Fundamental Footwork
- Fundamental Body Methods

The grouped edition adds only contents and section-divider pages; the 59
instruction packets themselves are reused unchanged.

Rebuild:

```sh
scripts/prep_iron_leg_figures.sh
scripts/prep_iron_leg_continuation_figures.sh
node scripts/build_iron_leg_packets.mjs
node scripts/build_iron_leg_grouped_print.mjs
```
