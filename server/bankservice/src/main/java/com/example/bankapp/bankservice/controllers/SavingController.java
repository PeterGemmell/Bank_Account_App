package com.example.bankapp.bankservice.controllers;


import com.example.bankapp.bankservice.models.Account;
import com.example.bankapp.bankservice.models.Saving;
import com.example.bankapp.bankservice.repositories.SavingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SavingController {

    @Autowired
    SavingRepository savingRepository;

    @GetMapping(value = "/savings")
    public ResponseEntity<List<Saving>> getAllSavings(){
        return new ResponseEntity<>(savingRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value = "/savings/{id}")
    public ResponseEntity getSaving(@PathVariable Long id){
        return new ResponseEntity<>(savingRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value = "/savings")
    public ResponseEntity<Saving> postSaving(@RequestBody Saving saving){
        savingRepository.save(saving);
        return new ResponseEntity<>(saving, HttpStatus.CREATED);
    }

    @PatchMapping(value = "/savings/{id}")
    public ResponseEntity<Saving> updateSaving(@RequestBody Saving saving){
        savingRepository.save(saving);
        return new ResponseEntity<>(saving, HttpStatus.OK);
    }

    @DeleteMapping(value = "/savings/{id}")
    public ResponseEntity<Saving> deleteSaving(@PathVariable Long id){
        Saving found = savingRepository.getOne(id);
        savingRepository.delete(found);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
