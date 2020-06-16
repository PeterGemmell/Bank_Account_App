package com.example.bankapp.bankservice.repositories;

import com.example.bankapp.bankservice.models.Account;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AccountRepository extends JpaRepository<Account, Long> {

}
