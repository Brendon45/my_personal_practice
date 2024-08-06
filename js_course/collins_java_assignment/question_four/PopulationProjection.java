import java.util.Scanner;

public class PopulationProjection {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Prompt the user to enter the current population
        System.out.print("Enter the current population: ");
        double currentPopulation = scanner.nextDouble(); // Use double for population

        // Constants for time calculations
        int secondsPerYear = 365 * 24 * 60 * 60;

        // Births, deaths, and immigrants per year
        int birthsPerYear = secondsPerYear / 7;
        int deathsPerYear = secondsPerYear / 13;
        int immigrantsPerYear = secondsPerYear / 45;

        // Calculate population for each of the next five years
        for (int year = 1; year <= 5; year++) {
            currentPopulation += birthsPerYear + immigrantsPerYear - deathsPerYear;
            System.out.printf("Population at the end of year %d: %.0f%n", year, currentPopulation);
        }

        scanner.close(); // Close the scanner
    }
}
