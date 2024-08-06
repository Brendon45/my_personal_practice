import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter the base and height
        System.out.print("Enter the base of the triangle: ");
        double base = scanner.nextDouble();
        System.out.print("Enter the height of the triangle: ");
        double height = scanner.nextDouble();

        // Create an instance of the Triangle class
        Triangle triangle = new Triangle(base, height);

        // Calculate the area
        double area = triangle.calculateArea();

        // Display the result
        System.out.println("The area of the triangle is: " + area);

        scanner.close();
    }
}
