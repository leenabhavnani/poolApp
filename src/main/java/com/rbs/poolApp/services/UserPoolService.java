package com.rbs.poolApp.services;

import com.rbs.poolApp.model.UserPool;

import java.util.List;


public interface UserPoolService {

    UserPool createUserPool (UserPool userPool);

    UserPool updateUserPool (UserPool userPool);

    List< UserPool > getAllUserPools();


}
