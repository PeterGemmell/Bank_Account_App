package com.example.bankapp.bankservice.repositories;

import com.example.bankapp.bankservice.models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

    Customer findByUserNameAndPassword(String userName, String password);
}
