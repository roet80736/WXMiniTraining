package com.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 * @Author: wutong
 * @date: 2018-8-12
 */
@SpringBootApplication
@RestController
public class StartApplication {


    public static void main(String[] args) {
        SpringApplication.run(StartApplication.class);
    }

    @PostMapping("/user/login")
    public String login (@RequestBody LoginModel model) {
        System.out.println("接口参数:"+ model);
        if ("123456".equals(model.getAccount())) {
            return "登陆成功";
        }
        return "登陆失败";
    }


}

class LoginModel {
    private String account;
    private String password;

    @Override
    public String toString() {
        return "LoginModel{" +
                "account='" + account + '\'' +
                ", password='" + password + '\'' +
                '}';
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
