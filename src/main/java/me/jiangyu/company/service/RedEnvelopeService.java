package me.jiangyu.company.service;

import me.jiangyu.company.dao.RedEnvelopeDao;
import me.jiangyu.company.domain.RedEnvelope;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Created by jiangyukun on 2015/1/20.
 */
@Service
@Transactional
public class RedEnvelopeService {
    @Autowired
    private RedEnvelopeDao redEnvelopeDao;

    public RedEnvelope getRedEnvelope(int id) {
        return redEnvelopeDao.getRedEnvelope(id);
    }

    public RedEnvelope getRedEnvelope() {
        int currentId = redEnvelopeDao.getCurrentRedEnvelopeId();
        if (currentId == -1) {
            System.out.println("red envelope is empty");
        }
        RedEnvelope redEnvelope = redEnvelopeDao.getRedEnvelope(currentId);
        redEnvelope.setFlag(false);
        try {
            Thread.sleep(200);
        } catch (Exception e) {
            System.exit(-1);
        }
        redEnvelopeDao.updateRedEnvelope(redEnvelope);
        try {
            Thread.sleep(200);
        } catch (Exception e) {
            System.exit(-1);
        }
        System.out.println("update id " + currentId + " success!");
        return redEnvelope;
    }

    public void saveRedEnvelope(RedEnvelope redEnvelope) {
        redEnvelopeDao.saveRedEnvelope(redEnvelope);
    }
}
