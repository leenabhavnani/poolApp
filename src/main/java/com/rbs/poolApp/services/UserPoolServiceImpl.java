package com.rbs.poolApp.services;

import com.rbs.poolApp.model.UserPool;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserPoolServiceImpl implements UserPoolService{
    @Override
    public UserPool createUserPool(UserPool userPool) {
        return null;
    }

    @Override
    public UserPool updateUserPool(UserPool userPool) {
        return null;
    }

    @Override
    public List<UserPool> getAllUserPools() {
        UserPool userPool = new UserPool();
        userPool.setPoolName("Pool_12_03_2020_12");
        userPool.setAmount(50000);
        userPool.setTenorInMonths(6);
        List poolList = new ArrayList();
        return poolList;
    }
}
