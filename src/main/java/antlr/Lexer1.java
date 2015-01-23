package antlr;

import org.antlr.runtime.ANTLRStringStream;
import org.antlr.runtime.CharStream;
import org.antlr.runtime.Token;
import org.antlr.v4.parse.ANTLRLexer;

/**
 * Created by jiangyukun on 2015/1/16.
 */
public class Lexer1 {
    public static void main(String[] args) {
        CharStream charStream = new ANTLRStringStream("aa  = 我是");
        ANTLRLexer lexer = new ANTLRLexer(charStream);
        Token token;
        while ((token = lexer.nextToken()).getType() != -1) {
            System.out.println("'" + token.getText() + "' " + token.getType());
        }
    }
}
