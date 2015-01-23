package other;

/**
 * Created by jiangyukun on 2015/1/19.
 */
public class CharLength {
    public static void main(String[] args) {
        char d = '我';
        String a = "";
        System.out.println(a.length());
        int s = 0;
        for (int i = 0; i < a.length(); i++) {
            char c = a.charAt(i);
            s += c;

        }
        System.out.println((short)'\uffff');
        /*for (byte b : a.getBytes()) {
            System.out.println(Integer.toBinaryString((int) b).substring(24));
        }*/
    }
}
