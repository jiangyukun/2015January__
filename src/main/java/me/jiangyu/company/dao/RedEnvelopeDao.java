package me.jiangyu.company.dao;

import me.jiangyu.company.domain.RedEnvelope;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import java.util.List;

/**
 * Created by jiangyukun on 2015/1/20.
 */
@Repository
public class RedEnvelopeDao {
    @PersistenceContext(unitName = "red_envelope")
    private EntityManager entityManager;

    public RedEnvelope getRedEnvelope(int id) {
        return entityManager.find(RedEnvelope.class, id);
    }

    public int getCurrentRedEnvelopeId() {
        Query query = entityManager.createQuery("select r from RedEnvelope r where r.flag = true order by r.id");
        List<RedEnvelope> redEnvelopeList = (List<RedEnvelope>) query.getResultList();
        if (redEnvelopeList.size() > 0) {
            return redEnvelopeList.get(0).getId();
        }
        return -1;
    }

    public void saveRedEnvelope(RedEnvelope redEnvelope) {
        entityManager.persist(redEnvelope);
    }

    public void updateRedEnvelope(RedEnvelope redEnvelope) {
        entityManager.merge(redEnvelope);
    }
}
