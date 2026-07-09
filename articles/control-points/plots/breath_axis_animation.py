#!/usr/bin/env python3
"""
breath_axis.py

Create a 3-panel 3D “breath axis” animation (hyoid, diaphragm, pelvic floor)
over a full inhale↔exhale cycle.  Can be imported or run as a script.
"""

import argparse
import numpy as np
import matplotlib.pyplot as plt
from matplotlib.colors import LinearSegmentedColormap, LightSource
import matplotlib.animation as animation

# ----------------------------------------
# Surface definitions
# ----------------------------------------
def pf_mexican_hat(x, y, inhale=True):
    return (-0.6 if inhale else -0.2) * np.exp(-3 * y**2) + (1.0 if inhale else 1.2) * x**2

def diaphragm_surface(x, y, inhale=True):
    return (0.6 if inhale else 0.3) * np.exp(-3 * (x**2 + y**2))

def hyoid_true_saddle(x, y, inhale=True):
    return (-0.15 if inhale else -0.3) * x**2 + (0.2 if inhale else 0.1) * y**2

def interpolate(a, b, t):
    return (1 - t) * a + t * b

# one shared colormap for all three panels
custom_blues = LinearSegmentedColormap.from_list(
    "custom_blues",
    ["#1a2a6c", "#4fc3f7"],  # deep indigo → bright soft blue
    N=1024
)

def remove_ticks(ax):
    ax.set_xticklabels([])
    ax.set_yticklabels([])
    ax.set_zticklabels([])

def plot_surface(ax, x, y, z):
    ls = LightSource(azdeg=230, altdeg=30)
    shaded = ls.shade(z, cmap=custom_blues)
    return ax.plot_surface(
        x, y, z,
        lightsource=shaded,
        cmap=custom_blues,
        edgecolor='none',
        linewidth=0,
        antialiased=False
    )

# ----------------------------------------
# Core animation generator
# ----------------------------------------
def create_animation(
    breath_length: float = 4.0,
    fps: int = 30,
    grid_size: int = 100,
    output: str = "breath_axis_animation.gif",
):
    # convert seconds → frames, interval in ms
    frames = int(breath_length * fps)
    interval = 1000.0 / fps

    # build our grids
    coords = np.linspace(-1, 1, grid_size)
    x, y = np.meshgrid(coords, coords)
    x_h, y_h = x, y  # same grid for hyoid

    # precompute inhale/exhale surfaces
    z_pf_in = pf_mexican_hat(x, y, inhale=True)
    z_pf_ex = pf_mexican_hat(x, y, inhale=False)
    z_d_in  = diaphragm_surface(x, y, inhale=True)
    z_d_ex  = diaphragm_surface(x, y, inhale=False)
    z_h_in  = hyoid_true_saddle(x_h, y_h, inhale=True)
    z_h_ex  = hyoid_true_saddle(x_h, y_h, inhale=False)

    # set up figure + subplots
    fig = plt.figure(figsize=(10, 15))
    ax1 = fig.add_subplot(3, 1, 1, projection='3d')
    ax2 = fig.add_subplot(3, 1, 2, projection='3d')
    ax3 = fig.add_subplot(3, 1, 3, projection='3d')
    surfaces = [None, None, None]

    def update(frame):
        t = 0.5 * (1 - np.cos(2 * np.pi * frame / frames))
        z_pf   = interpolate(z_pf_in, z_pf_ex, t)
        z_dia  = interpolate(z_d_in,  z_d_ex,  t)
        z_hyo  = interpolate(z_h_in,  z_h_ex,  t)

        # remove old
        for surf in surfaces:
            if surf:
                surf.remove()

        # clear & redraw each subplot
        ax1.clear(); ax2.clear(); ax3.clear()
        fig.suptitle("Vertical Breath Axis – Inhale ↔ Exhale Cycle", fontsize=16)

        surfaces[0] = plot_surface(ax1, z_hyo, x_h, y_h)
        ax1.view_init(elev=45)
        ax1.set_title('Hyoid Sling')
        ax1.set_xlim(-1,1); ax1.set_ylim(-2,2); ax1.set_zlim(-1.2,1.2)
        remove_ticks(ax1)

        surfaces[1] = plot_surface(ax2, x, y, z_dia)
        ax2.view_init(elev=45, azim=-60)
        ax2.set_title('Diaphragm')
        ax2.set_zlim(0,0.5)
        remove_ticks(ax2)

        surfaces[2] = plot_surface(ax3, x, y, z_pf)
        ax3.view_init(elev=45, azim=-60)
        ax3.set_title('Pelvic Floor')
        ax3.set_zlim(-0.5,0.5)
        remove_ticks(ax3)

        return surfaces

    ani = animation.FuncAnimation(
        fig, update, frames=frames, interval=interval, blit=False
    )
    ani.save(output, writer='pillow', fps=fps)
    print(f"✅ Animation saved as {output}")

# ----------------------------------------
# CLI entrypoint
# ----------------------------------------
def main():
    parser = argparse.ArgumentParser(
        description="Make a breath-axis 3D animation (inhale↔exhale cycle)."
    )
    parser.add_argument(
        "--breath_length", type=float, default=4.0,
        help="Duration of one full breath cycle (seconds)"
    )
    parser.add_argument(
        "--fps", type=int, default=30,
        help="Frames per second"
    )
    parser.add_argument(
        "--grid_size", type=int, default=100,
        help="Resolution of the meshgrid"
    )
    parser.add_argument(
        "--output", type=str, default="breath_axis_animation.gif",
        help="Output filename"
    )
    args = parser.parse_args()
    create_animation(
        breath_length=args.breath_length,
        fps=args.fps,
        grid_size=args.grid_size,
        output=args.output,
    )

if __name__ == "__main__":
    main()


