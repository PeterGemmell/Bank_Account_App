package com.example.bankapp.bankservice.controllers;

import com.example.bankapp.bankservice.models.Deposit;
import com.example.bankapp.bankservice.repositories.DepositRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class DepositController {

    @Autowired
    DepositRepository depositRepository;

    @GetMapping(value = "/deposits")
    public ResponseEntity<List<Deposit>> getAllDeposits(){
        return new ResponseEntity<>(depositRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/deposits/{id}")
    public ResponseEntity getDeposit(@PathVariable Long id){
        return new ResponseEntity<>(depositRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/deposits")
    public ResponseEntity<Deposit> postDeposit(@RequestBody Deposit deposit){
        depositRepository.save(deposit);
        return new ResponseEntity<>(deposit, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/deposits/{id")
    public ResponseEntity<Deposit> updateDeposit(@RequestBody Deposit deposit){
        depositRepository.save(deposit);
        return new ResponseEntity<>(deposit, HttpStatus.OK);
    }

    @DeleteMapping(value = "/deposits/{id}")
    public ResponseEntity<Deposit> deleteDeposit(@PathVariable Long id){
        Deposit found = depositRepository.getOne(id);
        depositRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
