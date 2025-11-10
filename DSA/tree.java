package DSA;
//write a program to create a binery tree and print:
//1.inorder 2.postorder

class TreeNode {
    int data;
    TreeNode left, right;
    TreeNode(int item) {
        data = item;
        left = right = null;
    }
}
class BinaryTree {
    TreeNode root;
    void inorder(TreeNode node) {
        if (node == null)
            return;
        inorder(node.left);
        System.out.print(node.data + " ");
        inorder(node.right);
    }
    void postorder(TreeNode node) {
        if (node == null)
            return;
        postorder(node.left);
        postorder(node.right);
        System.out.print(node.data + " ");
    }
}
public class tree {
    public static void main(String[] args) {
        BinaryTree tree = new BinaryTree();
        tree.root = new TreeNode(1);
        tree.root.left = new TreeNode(2);
        tree.root.right = new TreeNode(3);
        tree.root.left.left = new TreeNode(4);
        tree.root.left.right = new TreeNode(5);

        System.out.println("Inorder traversal:");
        tree.inorder(tree.root);
        System.out.println("\nPostorder traversal:");

        tree.postorder(tree.root);
    }
}