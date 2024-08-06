public class Rectangle {
    private double width;
    private double height;

    // Constructor to initialize the width and height
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    public double calculateArea() {
        return width * height;
    }

    // Method to calculate the perimeter of the rectangle
    public double calculatePerimeter() {
        return 2 * (width + height);
    }

    // Getters for width and height
    public double getWidth() {
        return width;
    }

    public double getHeight() {
        return height;
    }

    // Setters for width and height
    public void setWidth(double width) {
        this.width = width;
    }

    public void setHeight(double height) {
        this.height = height;
    }
}
