package com.rbs.poolApp.controller;

import com.rbs.poolApp.model.UserPool;
import com.rbs.poolApp.services.UserPoolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class UserPoolController {

    @Autowired
    private UserPoolService userPoolService;

    @GetMapping("/getAllUserPools")
    public ResponseEntity <List<UserPool>> getAllUserPools() {
        return ResponseEntity.ok().body(userPoolService.getAllUserPools());
    }
}
