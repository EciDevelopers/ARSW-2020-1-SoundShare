package edu.eci.arsw.controllers;

import edu.eci.arsw.services.client.impl.ServiciosSoundShareImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/user")
public class SoundShareAPIController {
    @Autowired
    ServiciosSoundShareImpl ser = null;


}
