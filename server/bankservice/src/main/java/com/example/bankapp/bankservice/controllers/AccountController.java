package com.example.bankapp.bankservice.controllers;

import com.example.bankapp.bankservice.models.Account;
import com.example.bankapp.bankservice.models.Deposit;
import com.example.bankapp.bankservice.repositories.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AccountController {

    @Autowired
    AccountRepository accountRepository;

    @GetMapping(value = "/accounts")
    public ResponseEntity<List<Account>> getAllAccounts(){
        return new ResponseEntity<>(accountRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/accounts/{id}")
    public ResponseEntity getAccount(@PathVariable Long id){
        return new ResponseEntity<>(accountRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/accounts")
    public ResponseEntity<Account> postAccount(@RequestBody Account account){
        accountRepository.save(account);
        return new ResponseEntity<>(account, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/accounts/{id}")
    public ResponseEntity<Account> updateAccount(@RequestBody Account account){
        accountRepository.save(account);
        return new ResponseEntity<>(account, HttpStatus.OK);
    }

    @DeleteMapping(value = "/accounts/{id}")
    public ResponseEntity<Account> deleteAccount(@PathVariable Long id){
        Account found = accountRepository.getOne(id);
        accountRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
