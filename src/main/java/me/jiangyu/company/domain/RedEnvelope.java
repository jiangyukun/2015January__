package me.jiangyu.company.domain;

import javax.persistence.*;

/**
 * Created by jiangyukun on 2015/1/20.
 */
@Entity
@Table(name = "redEnvelope")
public class RedEnvelope {
    private int id;
    private int money;
    private boolean flag;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    public boolean isFlag() {
        return flag;
    }

    public void setFlag(boolean flag) {
        this.flag = flag;
    }
}
