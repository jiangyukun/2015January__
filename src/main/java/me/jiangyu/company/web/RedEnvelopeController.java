package me.jiangyu.company.web;

import me.jiangyu.company.domain.RedEnvelope;
import me.jiangyu.company.service.RedEnvelopeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 * Created by jiangyukun on 2015/1/20.
 */
@Controller
@RequestMapping("/redEnvelope")
public class RedEnvelopeController {
    private static final byte[] lock = new byte[0];

    @Autowired
    private RedEnvelopeService redEnvelopeService;

    @RequestMapping("/get")
    @ResponseBody
    public String getRedEnvelope() {
        synchronized (lock) {
            RedEnvelope redEnvelope = redEnvelopeService.getRedEnvelope();
            System.out.println(redEnvelope.getId() + " " + redEnvelope.getMoney());
            return "";
        }
    }

    @RequestMapping("/save")
    public String saveRedEnvelope() {
        for (int i = 1000; i > 0; i--) {
            RedEnvelope redEnvelope = new RedEnvelope();
            redEnvelope.setFlag(true);
            redEnvelope.setMoney(i);
            redEnvelopeService.saveRedEnvelope(redEnvelope);
        }
        return "";
    }

}
