package com.example.bankapp.bankservice.components;

import com.example.bankapp.bankservice.models.Account;
import com.example.bankapp.bankservice.models.Customer;
import com.example.bankapp.bankservice.models.Deposit;
import com.example.bankapp.bankservice.models.Saving;
import com.example.bankapp.bankservice.repositories.AccountRepository;
import com.example.bankapp.bankservice.repositories.CustomerRepository;
import com.example.bankapp.bankservice.repositories.DepositRepository;
import com.example.bankapp.bankservice.repositories.SavingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    CustomerRepository customerRepository;

    @Autowired
    AccountRepository accountRepository;

    @Autowired
    DepositRepository depositRepository;

    @Autowired
    SavingRepository savingRepository;

    public DataLoader(){
    }

    public void run(ApplicationArguments args){

        Customer customer1 = new Customer("PeteG", "Peter", "Gemmell", "Zip12", "petergemmell65@hotmail.com");
        customerRepository.save(customer1);

        Account account1 = new Account("Peter Gemmell", "Current Account", "3029150", 3000.00, customer1);
        accountRepository.save(account1);

        Saving saving1 = new Saving("Peter Gemmell", "Savings Account", "5632091", 5000.00, customer1);
        savingRepository.save(saving1);

        Deposit deposit1 = new Deposit("Peter Gemmell", "3029150", 500.00, customer1, account1, saving1);
        depositRepository.save(deposit1);


    }
}
