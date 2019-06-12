load('Point.js');
load('Triangle.js');

p1 = new Point(1,1);
p2 = new Point(1,6);
p3 = new Point(8,1);

triangle1 = new Triangle(p1, p2, p3);
triangle1.toString();
