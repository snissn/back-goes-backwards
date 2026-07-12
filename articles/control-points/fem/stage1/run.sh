

#generate mesh
gmsh diaphragm_saddle.geo -2 -format msh2 -o diaphragm_saddle.msh

# 1B Convert the Mesh for Elmer
ElmerGrid 14 2 diaphragm_saddle.msh -out diaphragm_saddle_elmer


ElmerSolver diaphragm_saddle.sif


/home/mikers/Downloads/ParaView-6.0.0-RC1-MPI-Linux-Python3.12-x86_64/bin/paraview results/diaphragm_saddle_t0001.vtu
