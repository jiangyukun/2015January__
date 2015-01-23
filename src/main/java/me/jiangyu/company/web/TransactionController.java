package me.jiangyu.company.web;

import me.jiangyu.company.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Created by jiangyukun on 2015/1/20.
 */
@Controller
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @RequestMapping("/test1")
    public void test1() {
        transactionService.test1();
    }

    @RequestMapping("/test2")
    public void test() {
        transactionService.test2();
    }
}
