package com.example.bankapp.bankservice.models;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="savings")
public class Saving {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name="saving_customer_name")
    private String savingCustomerName;

    @Column(name="saving_account_type")
    private String savingAccountType;

    @Column(name="saving_account_number")
    private String savingAccountNumber;

    @Column(name="saving_balance")
    private Double savingBalance;

    @JsonBackReference
    @JsonIgnoreProperties(value="savings")
    @ManyToOne
    @JoinColumn(name="customer_id", nullable = false)
    private Customer customer;

    @JsonIgnoreProperties(value="savings")
    @OneToMany(mappedBy = "saving", fetch = FetchType.LAZY)
    private List<Deposit> deposits;

    public Saving(String savingCustomerName, String savingAccountType, String savingAccountNumber, Double savingBalance, Customer customer){
        this.savingCustomerName = savingCustomerName;
        this.savingAccountType = savingAccountType;
        this.savingAccountNumber = savingAccountNumber;
        this.savingBalance = savingBalance;
        this.customer = customer;
        this.deposits = new ArrayList<>();
    }

    public Saving(){
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSavingCustomerName() {
        return savingCustomerName;
    }

    public void setSavingCustomerName(String savingCustomerName) {
        this.savingCustomerName = savingCustomerName;
    }

    public String getSavingAccountType() {
        return savingAccountType;
    }

    public void setSavingAccountType(String savingAccountType) {
        this.savingAccountType = savingAccountType;
    }

    public String getSavingAccountNumber() {
        return savingAccountNumber;
    }

    public void setSavingAccountNumber(String savingAccountNumber) {
        this.savingAccountNumber = savingAccountNumber;
    }

    public Double getSavingBalance() {
        return savingBalance;
    }

    public void setSavingBalance(Double savingBalance) {
        this.savingBalance = savingBalance;
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
