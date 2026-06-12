#include <iostream>
#include <limits> // For numeric_limits

using namespace std;

int main() {
    double num1, num2;

    cout << "Enter first number: ";
    while (!(cin >> num1)) { // Validate input
        cout << "Invalid input. Please enter a number: ";
        cin.clear(); // Clear error flag
        cin.ignore(numeric_limits<streamsize>::max(), '\n'); // Discard invalid input
    }

    cout << "Enter second number: ";
    while (!(cin >> num2)) { // Validate input
        cout << "Invalid input. Please enter a number: ";
        cin.clear();
        cin.ignore(numeric_limits<streamsize>::max(), '\n');
    }

    double sum = num1 + num2;
    cout << "The sum of " << num1 << " and " << num2 << " is: " << sum << endl;

    return 0;
}