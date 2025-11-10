//write a java program to print the fibonacci seties up to N .

package JAVA;
import java.util.Scanner;
public class fibbonaci {
    public static void main(String[] args){
        Scanner k = new Scanner(System.in);
        System.out.print("Enter the number of terms: ");
        int n = k.nextInt();
        int a = 0, b = 1;
        System.out.print("Fibonacci series up to " + n + " terms: ");
        for (int i = 1; i <= n; i++) {
            System.out.print(a + " ");  
            int next = a + b;
            a = b;
            b = next;
        }
        k.close();
    }
}