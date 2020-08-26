package com.rbs.poolApp.model;
//import javax.validation.constraints.NotBlank;
//import javax.validation.constraints.Size;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.index.Indexed;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

public class UserPool {

    private int id;
    private String poolName;
    private List<String> participants;
    private long amount;
    private int tenorInMonths;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getPoolName() {
        return poolName;
    }

    public void setPoolName(String poolName) {
        this.poolName = poolName;
    }

    public List<String> getParticipants() {
        return participants;
    }

    public void setParticipants(List<String> participants) {
        this.participants = participants;
    }

    public long getAmount() {
        return amount;
    }

    public void setAmount(long amount) {
        this.amount = amount;
    }

    public int getTenorInMonths() {
        return tenorInMonths;
    }

    public void setTenorInMonths(int tenorInMonths) {
        this.tenorInMonths = tenorInMonths;
    }
}
