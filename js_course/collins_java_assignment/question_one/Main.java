import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter the radius
        System.out.print("Enter the radius of the circle: ");
        
        // Check if the input is a valid double
        while (!scanner.hasNextDouble()) {
            System.out.print("Invalid input. Please enter a valid number for the radius: ");
            scanner.next();
        }
        
        double radius = scanner.nextDouble();

        // Create an instance of the Circle class
        Circle circle = new Circle(radius);

        // Calculate the area and perimeter
        double area = circle.calculateArea();
        double perimeter = circle.calculatePerimeter();

        // Display the results
        System.out.printf("The area of the circle is: %.2f\n", area);
        System.out.printf("The perimeter (circumference) of the circle is: %.2f\n", perimeter);

        scanner.close();
    }
}
