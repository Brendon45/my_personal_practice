public class Triangle {
    private double base;
    private double height;

    // Constructor to initialize the base and height
    public Triangle(double base, double height) {
        this.base = base;
        this.height = height;
    }

    // Method to calculate the area of the triangle
    public double calculateArea() {
        return 0.5 * base * height;
    }

    // Getters for base and height
    public double getBase() {
        return base;
    }

    public double getHeight() {
        return height;
    }

    // Setters for base and height
    public void setBase(double base) {
        this.base = base;
    }

    public void setHeight(double height) {
        this.height = height;
    }
}
