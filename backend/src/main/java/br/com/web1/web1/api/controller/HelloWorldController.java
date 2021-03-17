package br.com.web1.web1.api.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;


/**
 * HelloWorldController
 */
@RestController
public class HelloWorldController {

    @GetMapping("/")
    public String name() {
        return "Hello World!!";
    }
    
    
}