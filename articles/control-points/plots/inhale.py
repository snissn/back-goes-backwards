# Regenerate combined inhale/exhale plots for the pelvic floor, diaphragm, and hyoid sling
# Re-import required data/functions after kernel reset

import numpy as np
import matplotlib.pyplot as plt

from breath_axis_animation import removeTicks, plot_surface

# Base grid
x = np.linspace(-1, 1, 100)
y = np.linspace(-1, 1, 100)
x, y = np.meshgrid(x, y)

# Pelvic floor surface functions
def pf_mexican_hat(x, y, inhale=True):
    if inhale:
        return -0.6 * np.exp(-3 * y**2) + 1.0 * x**2
    else:
        return -0.2 * np.exp(-3 * y**2) + 1.2 * x**2

z_inhale_hat = pf_mexican_hat(x, y, inhale=True)
z_exhale_hat = pf_mexican_hat(x, y, inhale=False)

# Diaphragm functions
def diaphragm_surface(x, y, inhale=True):
    if inhale:
        return 0.6 * np.exp(-3 * (x**2 + y**2))
    else:
        return 0.3 * np.exp(-3 * (x**2 + y**2))

z_diaphragm_inhale = diaphragm_surface(x, y, inhale=True)
z_diaphragm_exhale = diaphragm_surface(x, y, inhale=False)

# Hyoid coordinate grid and surface
x_h = np.linspace(-1, 1, 100)
y_h = np.linspace(-1, 1, 100)
x_h, y_h = np.meshgrid(x_h, y_h)

def hyoid_true_saddle(x, y, inhale=True):
    if inhale:
        return -0.15 * x**2 + 0.2 * y**2
    else:
        return -0.3 * x**2 + 0.1 * y**2

z_hyoid_reoriented_inhale = hyoid_true_saddle(x_h, y_h, inhale=True)
z_hyoid_reoriented_exhale = hyoid_true_saddle(x_h, y_h, inhale=False)

# Plot inhale and exhale in a side-by-side column layout
fig, axs = plt.subplots(3, 2, figsize=(14, 15), subplot_kw={'projection': '3d'})

# Pelvic Floor
axs[2, 1].set_title('Pelvic Floor – Inhale')
axs[2, 1].set_xlabel('Anterior ↔ Posterior')
axs[2, 1].set_ylabel('Left ↔ Right')
axs[2, 1].set_zlabel('Vertical')
axs[2, 1].view_init(elev=45, azim=-60)
plot_surface( axs[2, 1], y, x, z_inhale_hat)

axs[2, 0].set_title('Pelvic Floor – Exhale')
axs[2, 0].set_xlabel('Anterior ↔ Posterior')
axs[2, 0].set_ylabel('Left ↔ Right')
axs[2, 0].set_zlabel('Vertical')
axs[2, 0].view_init(elev=45, azim=-60)
plot_surface( axs[2, 0], y, x, z_exhale_hat)

# Diaphragm
axs[1, 1].set_title('Diaphragm – Inhale')
axs[1, 1].set_xlabel('Anterior ↔ Posterior')
axs[1, 1].set_ylabel('Left ↔ Right')
axs[1, 1].set_zlabel('Vertical')
axs[1, 1].set_zlim(0, 0.7)
axs[1, 1].view_init(elev=45, azim=-60)
plot_surface( axs[1, 1], y, x, z_diaphragm_inhale)

axs[1, 0].set_title('Diaphragm – Exhale')
axs[1, 0].set_xlabel('Anterior ↔ Posterior')
axs[1, 0].set_ylabel('Left ↔ Right')
axs[1, 0].set_zlabel('Vertical')
axs[1, 0].set_zlim(0, 0.7)
axs[1, 0].view_init(elev=45, azim=-60)
plot_surface(axs[1, 0], y, x, z_diaphragm_exhale)

# Hyoid Sling
axs[0, 1].set_title('Hyoid Sling – Inhale')
axs[0, 1].set_xlabel('Superior ↔ Inferior')
axs[0, 1].set_ylabel('Left ↔ Right')
axs[0, 1].set_zlabel('Anterior ↔ Posterior (Vertical)')
axs[0, 1].set_zlim(1.2, -1.2)
axs[0, 1].view_init(elev=45)
plot_surface( axs[0, 1], z_hyoid_reoriented_inhale, y_h, x_h)

axs[0, 0].set_title('Hyoid Sling – Exhale')
axs[0, 0].set_xlabel('Superior ↔ Inferior')
axs[0, 0].set_ylabel('Left ↔ Right')
axs[0, 0].set_zlabel('Anterior ↔ Posterior')
axs[0, 0].set_zlim(1.2, -1.2)
axs[0, 0].view_init(elev=45)
plot_surface( axs[0, 0], z_hyoid_reoriented_exhale, y_h, x_h)

for i in range(3):
    for j in range(2):
        removeTicks(axs[i,j])

fig.suptitle("Vertical Breath Axis – Inhale and Exhale Comparison", fontsize=16)
plt.tight_layout()
#plt.show()
plt.savefig("Inhale_and_Exhale_Comparison.png")

