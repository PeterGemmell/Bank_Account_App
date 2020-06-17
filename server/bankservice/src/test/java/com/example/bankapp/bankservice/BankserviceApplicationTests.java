package com.example.bankapp.bankservice;

import com.example.bankapp.bankservice.models.Account;
import com.example.bankapp.bankservice.models.Customer;
import com.example.bankapp.bankservice.repositories.AccountRepository;
import com.example.bankapp.bankservice.repositories.CustomerRepository;
import com.example.bankapp.bankservice.repositories.DepositRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BankserviceApplicationTests {

	@Autowired
	CustomerRepository customerRepository;

	@Autowired
	AccountRepository accountRepository;

	@Autowired
	DepositRepository depositRepository;

	@Test
	void contextLoads() {
	}

	@Test
	public void canSaveCustomerDetails(){
		Customer customer1 = new Customer("PeteG", "Peter", "Gemmell", "Zip12", "petergemmell65@hotmail.com");
		customerRepository.save(customer1);
	}

//	@Test
//	public void canSaveAccountDetails(){
//		Account account1 = new Account("Peter Gemmell", "Current Account", "3029150", 3000.00,);
//	}

}
