package idea;

import java.io.File;

/**
 * Created by jiangyukun on 2015/1/16.
 */
public class Test {
    private String str;

    public static void main(String[] args) {
        new Test().annotation("test");
        File file = new File("D:/x");
        System.out.println(file.isDirectory());
    }

    public void annotation(String a) {
        if (a != null) {
            str = a;
            System.out.println("yes");
        }
    }
}
