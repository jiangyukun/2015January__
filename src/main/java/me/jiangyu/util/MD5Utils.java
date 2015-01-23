package me.jiangyu.util;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

/**
 * Created by jiangyukun on 2015/1/12.
 */
public abstract class MD5Utils {
    public enum Type {
        UPPER, LOWER
    }

    public static final char[] hexUpper = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'};
    public static final char[] hexLower = {'0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'};

    public static String md5(String original) {
        return md5(original, Type.UPPER);
    }

    public static String md5(String original, Type type) {
        byte[] m;
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("md5");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("");
        }
        md.update(original.getBytes());
        m = md.digest();
        int len = m.length;
        char[] chars = new char[len * 2];
        int j = 0;
        for (byte c : m) {
            if (Type.UPPER == type) {
                chars[j++] = hexUpper[c >>> 4 & 0xf];
                chars[j++] = hexUpper[c & 0xf];
            } else {
                chars[j++] = hexLower[c >>> 4 & 0xf];
                chars[j++] = hexLower[c & 0xf];
            }
        }
        return new String(chars);
    }

    public static void main(String[] args) {
        System.out.println(md5("123456"));
    }
}
