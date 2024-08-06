import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter the width and height
        System.out.print("Enter the width of the rectangle: ");
        double width = scanner.nextDouble();
        System.out.print("Enter the height of the rectangle: ");
        double height = scanner.nextDouble();

        // Create an instance of the Rectangle class
        Rectangle rectangle = new Rectangle(width, height);

        // Calculate the area and perimeter
        double area = rectangle.calculateArea();
        double perimeter = rectangle.calculatePerimeter();

        // Display the results
        System.out.println("The area of the rectangle is: " + area);
        System.out.println("The perimeter of the rectangle is: " + perimeter);

        scanner.close();
    }
}
