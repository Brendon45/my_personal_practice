public class Circle {
    private double radius;

    // Constructor to initialize the radius
    public Circle(double radius) {
        this.radius = radius;
    }

    // Method to calculate the area of the circle
    public double calculateArea() {
        return Math.PI * radius * radius;
    }

    // Method to calculate the perimeter (circumference) of the circle
    public double calculatePerimeter() {
        return 2 * Math.PI * radius;
    }

    // Getter for the radius
    public double getRadius() {
        return radius;
    }

    // Setter for the radius
    public void setRadius(double radius) {
        this.radius = radius;
    }
}
