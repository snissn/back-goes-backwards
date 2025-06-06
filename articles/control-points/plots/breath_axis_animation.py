import numpy as np
from matplotlib.colors import LinearSegmentedColormap
import matplotlib.pyplot as plt
import matplotlib.animation as animation
from mpl_toolkits.mplot3d import Axes3D
from matplotlib.colors import LightSource

surf1 = None
surf2 = None
surf3 = None
frames = 120

# --------------------------
# Define surface functions
# --------------------------
def pf_mexican_hat(x, y, inhale=True):
    if inhale:
        return -0.6 * np.exp(-3 * y**2) + 1.0 * x**2
    else:
        return -0.2 * np.exp(-3 * y**2) + 1.2 * x**2

def diaphragm_surface(x, y, inhale=True):
    if inhale:
        return 0.6 * np.exp(-3 * (x**2 + y**2))
    else:
        return 0.3 * np.exp(-3 * (x**2 + y**2))

def hyoid_true_saddle(x, y, inhale=True):
    if inhale:
        return -0.15 * x**2 + 0.2 * y**2
    else:
        return -0.3 * x**2 + 0.1 * y**2

def interpolate(a, b, t):
    return (1 - t) * a + t * b
custom_blues = LinearSegmentedColormap.from_list(
    "custom_blues",
    ["#1a2a6c", "#4fc3f7"],  # deep indigo → bright soft blue
    N=1024
)
def removeTicks(ax):
    ax.set_xticklabels([])          # Hide tick numbers
    ax.set_yticklabels([])
    ax.set_zticklabels([])


def plot_surface(ax,x,y,z):
    ls = LightSource(azdeg=230, altdeg=30)
    shaded_rgb = ls.shade(z, cmap=custom_blues)
    graph_kwargs = { 
                     "cmap": custom_blues,
                     "edgecolor":'none',
                     "linewidth":0,
                     "lightsource": shaded_rgb,
                     "antialiased":False,
                     }
    return ax.plot_surface(x,y,z, **graph_kwargs)

def update(frame):
    global surf1, surf2, surf3, frames
    for surf in [surf1, surf2, surf3]:
        if surf:
            surf.remove()

    t = 0.5 * (1 - np.cos(2 * np.pi * frame / frames))
    z_pf = interpolate(z_pf_inhale, z_pf_exhale, t)
    z_dia = interpolate(z_dia_inhale, z_dia_exhale, t)
    z_hyoid = interpolate(z_hyoid_inhale, z_hyoid_exhale, t)

    ax1.clear()
    ax2.clear()
    ax3.clear()

    fig.suptitle("Vertical Breath Axis – Inhale ↔ Exhale Cycle", fontsize=16)

    ax1.view_init(elev=45)
    surf1 = plot_surface(ax1,z_hyoid, y_h, x_h)
    ax1.set_title('Hyoid Sling')
    ax1.set_xlabel('Anterior ↔ Posterior')
    ax1.set_ylabel('Left ↔ Right')
    ax1.set_zlabel('Vertical')
    ax1.set_zlim(-1.2, 1.2)
    ax1.set_xlim(-1.0, 1.0)
    ax1.set_ylim(-2.0, 2.0)
    removeTicks(ax1)

    ax2.view_init(elev=45, azim=-60)
    surf2 = plot_surface(ax2, y, x, z_dia)
    ax2.set_title('Diaphragm')
    ax2.set_xlabel('Anterior ↔ Posterior')
    ax2.set_ylabel('Left ↔ Right')
    ax2.set_zlabel('Vertical')
    ax2.set_zlim(0, 0.5)
    removeTicks(ax2)

    ax3.view_init(elev=45, azim=-60)
    surf3 = plot_surface(ax3, y, x, z_pf)
    ax3.set_title('Pelvic Floor')
    ax3.set_xlabel('Anterior ↔ Posterior')
    ax3.set_ylabel('Left ↔ Right')
    ax3.set_zlabel('Vertical')
    ax3.set_zlim(-0.5, 0.5)
    removeTicks(ax3)


def main():
    pass

# --------------------------
# Grids and surfaces
# --------------------------

N = 100

x = np.linspace(-1, 1, N)
y = np.linspace(-1, 1, N)
x, y = np.meshgrid(x, y)

x_h = np.linspace(-1, 1, N)
y_h = np.linspace(-1, 1, N)
x_h, y_h = np.meshgrid(x_h, y_h)

z_pf_inhale = pf_mexican_hat(x, y, inhale=True)
z_pf_exhale = pf_mexican_hat(x, y, inhale=False)

z_dia_inhale = diaphragm_surface(x, y, inhale=True)
z_dia_exhale = diaphragm_surface(x, y, inhale=False)

z_hyoid_inhale = hyoid_true_saddle(x_h, y_h, inhale=True)
z_hyoid_exhale = hyoid_true_saddle(x_h, y_h, inhale=False)

# --------------------------
# Animation setup
# --------------------------

fig = plt.figure(figsize=(10, 15))
ax1 = fig.add_subplot(3, 1, 1, projection='3d')
ax2 = fig.add_subplot(3, 1, 2, projection='3d')
ax3 = fig.add_subplot(3, 1, 3, projection='3d')


# --------------------------
# Save the animation
# --------------------------
ani = animation.FuncAnimation(fig, update, frames=frames, interval=1000)
ani.save("breath_axis_animation.shading.gif", writer='pillow', fps=30)
print("✅ Animation saved as breath_axis_animation.gif")



if __name__ == "__main__":
    main()

