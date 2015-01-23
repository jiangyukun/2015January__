package me.jiangyu.company.service;

import me.jiangyu.company.dao.RedEnvelopeDao;
import me.jiangyu.company.domain.RedEnvelope;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by jiangyukun on 2015/1/20.
 */
@Service
public class TransactionService {
    @Autowired
    private RedEnvelopeDao redEnvelopeDao;

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    public void test1() {
        RedEnvelope redEnvelope = redEnvelopeDao.getRedEnvelope(1);
        redEnvelope.setMoney(5);
        redEnvelopeDao.updateRedEnvelope(redEnvelope);
        try {
            Thread.sleep(5000);
        } catch (InterruptedException e) {
            System.exit(-1);
        }
        throw new RuntimeException("read uncommitted");
    }

    @Transactional(isolation = Isolation.READ_UNCOMMITTED, readOnly = true)
    public void test2() {
        RedEnvelope redEnvelope = redEnvelopeDao.getRedEnvelope(1);
        System.out.println(redEnvelope.getMoney());
    }

    @Transactional(isolation = Isolation.READ_UNCOMMITTED)
    public void test3() {

    }
}
