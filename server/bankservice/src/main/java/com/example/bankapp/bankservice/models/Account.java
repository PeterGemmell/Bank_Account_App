package com.example.bankapp.bankservice.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="accounts")
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="customer_name")
    private String customerName;

    @Column(name="account_type")
    private String accountType;

    @Column(name="account_no")
    private String accountNo;

    @Column(name="current_balance")
    private Double currentBalance;

    @JsonIgnoreProperties(value="accounts")
    @ManyToOne
    @JoinColumn(name= "customer_id", nullable = false)
    private Customer customer;

    @JsonIgnoreProperties(value="accounts")
    @OneToMany(mappedBy = "account", fetch = FetchType.LAZY)
    private List<Deposit> deposits;

    public Account(String customerName, String accountType, String accountNo, Double currentBalance, Customer customer){
        this.customerName = customerName;
        this.accountType = accountType;
        this.accountNo = accountNo;
        this.currentBalance = currentBalance;
        this.customer = customer;
        this.deposits = new ArrayList<>();
    }

    public Account() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCustomerName() {
        return customerName;
    }

    public void setCustomerName(String customerName) {
        this.customerName = customerName;
    }

    public String getAccountType() {
        return accountType;
    }

    public void setAccountType(String accountType) {
        this.accountType = accountType;
    }

    public String getAccountNo() {
        return accountNo;
    }

    public void setAccountNo(String accountNo) {
        this.accountNo = accountNo;
    }

    public Double getCurrentBalance() {
        return currentBalance;
    }

    public void setCurrentBalance(Double currentBalance) {
        this.currentBalance = currentBalance;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public List<Deposit> getDeposits() {
        return deposits;
    }

    public void setDeposits(List<Deposit> deposits) {
        this.deposits = deposits;
    }
}
