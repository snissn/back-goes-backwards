// diaphragm_saddle.geo

// Parameters
R = 0.1;  // Radius (meters)
res = 0.005;  // Mesh resolution

// Define center point
Point(1) = {0, 0, 0, res};

// Outer arc
Point(2) = {R, 0, 0, res};
Point(3) = {0, R, 0, res};
Point(4) = {-R, 0, 0, res};
Point(5) = {0, -R, 0, res};

// Circle arcs
Circle(1) = {2, 1, 3};
Circle(2) = {3, 1, 4};
Circle(3) = {4, 1, 5};
Circle(4) = {5, 1, 2};

// Line loop and surface
Line Loop(10) = {1, 2, 3, 4};
Plane Surface(11) = {10};

// Mesh control (optional)
Transfinite Surface{11};
Recombine Surface{11};  // Optionally make quads

// Save mesh
Mesh.Format = 1; // Gmsh 2.2 format for Elmer compatibility

