import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
from git import Repo
import sys
import os

# Ruta del repositorio (por defecto la carpeta actual)
repo_path = sys.argv[1] if len(sys.argv) > 1 else "."
repo = Repo(repo_path)

commits = list(repo.iter_commits('--all', max_count=100))
commits.reverse()

# Mapear cada commit a su posición Y
commit_index = {c.hexsha: i for i, c in enumerate(commits)}

# Asignar carril X por rama
branch_map = {}
lane_counter = [0]

def get_lane(hexsha):
    if hexsha not in branch_map:
        branch_map[hexsha] = lane_counter[0]
        lane_counter[0] += 1
    return branch_map[hexsha]

# Propagar carriles desde ramas conocidas
for ref in repo.references:
    sha = ref.commit.hexsha
    get_lane(sha)

for c in commits:
    get_lane(c.hexsha)

# Tamaño dinámico según número de commits
n = len(commits)
fig_height = max(10, n * 0.4)
fig, ax = plt.subplots(figsize=(16, fig_height))
ax.set_facecolor('#1e1e2e')
fig.patch.set_facecolor('#1e1e2e')

colors = ['#89b4fa', '#a6e3a1', '#fab387', '#f38ba8',
          '#cba6f7', '#94e2d5', '#f9e2af', '#89dceb']

drawn = set()

for c in commits:
    y = commit_index[c.hexsha]
    x = get_lane(c.hexsha)
    color = colors[x % len(colors)]

    # Dibujar líneas a padres
    for p in c.parents:
        if p.hexsha in commit_index:
            py = commit_index[p.hexsha]
            px = get_lane(p.hexsha)
            pc = colors[px % len(colors)]
            ax.plot([x, px], [y, py], color=pc, linewidth=1.5, alpha=0.6, zorder=1)

    # Nodo del commit
    ax.scatter(x, y, color=color, s=80, zorder=3)

    # Etiqueta: hash corto + mensaje
    msg = c.message.split('\n')[0][:50]
    label = f"{c.hexsha[:7]}  {msg}"
    ax.text(x + 0.15, y, label, color='#cdd6f4', fontsize=7,
            va='center', fontfamily='monospace', zorder=4)

# Etiquetas de ramas
for ref in repo.references:
    sha = ref.commit.hexsha
    if sha in commit_index:
        y = commit_index[sha]
        x = get_lane(sha)
        ax.text(x, y + 0.4, ref.name, color='#f9e2af', fontsize=6,
                ha='center', fontweight='bold',
                bbox=dict(boxstyle='round,pad=0.2', fc='#313244', ec='#f9e2af', lw=0.8))

ax.set_xlim(-0.5, max(branch_map.values()) + 2)
ax.set_ylim(-1, n + 1)
ax.axis('off')
ax.set_title('Git Graph', color='#cdd6f4', fontsize=14, pad=12)

output = "git_graph.png"
plt.savefig(output, dpi=150, bbox_inches='tight', facecolor=fig.get_facecolor())
plt.close()
print(f"✅ Gráfico guardado como: {os.path.abspath(output)}")