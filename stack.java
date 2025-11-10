//write a program to implement satck using an array with the following operations.
//1.push 2.pop 3.display


class Stack {
    int maxSize;
    int[] stackArray;
    int top;    
    Stack(int size) {
        maxSize = size;
        stackArray = new int[maxSize];
        top = -1;
    }
    void push(int value) {
        if (top == maxSize - 1) {
            System.out.println("Stack Overflow");
        } else {
            stackArray[++top] = value;
            System.out.println(value + " pushed to stack");
        }
    }
    int pop() {
        if (top == -1) {
            System.out.println("Stack Underflow");      
            return -1;
        } else {
            return stackArray[top--];
        }
    }
    void display() {
        if (top == -1) {
            System.out.println("Stack is empty");
        } else {
            System.out.print("Stack elements: ");
            for (int i = top; i >= 0; i--) {
                System.out.print(stackArray[i] + " ");
            }
            System.out.println();
        }
    }
   
}public class stack {
    public static void main(String[] args) {
        Stack stack = new Stack(5);
        stack.push(10);
        stack.push(20);
        stack.push(30);
        stack.display();
        System.out.println(stack.pop() + " popped from stack");
        stack.display();
    }
}