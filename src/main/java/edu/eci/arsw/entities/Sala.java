package edu.eci.arsw.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

/**
 *
 * @author fernando.barrera
 */
@Entity
@Table(name = "sala")
public class Sala implements Serializable {
    @Id
    private int id;
    private String nombre;
    private String genero;
    private String tipo;
    @JsonIgnore
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name="salausers",
    joinColumns=@JoinColumn(name="nombre_sala",referencedColumnName ="nombre"),
    inverseJoinColumns=@JoinColumn(name="nombre_usuario",referencedColumnName="nombre")
    )
    private Set<Usuario> usuarios;
    @JsonIgnore
    @ManyToMany(fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JoinTable(name="colacanciones",
    joinColumns=@JoinColumn(name="nombre_sala",referencedColumnName ="nombre"),
    inverseJoinColumns=@JoinColumn(name="id_cancion",referencedColumnName="id")
    )
    private List<Cancion> colacanciones;

    public Sala(){
        super();
    }
    public Sala(int id, String nombre, String genero,String tipo,Set<Usuario> usuarios,List<Cancion> colacanciones) {
        this.id = id;
        this.nombre = nombre;
        this.genero = genero;
        this.tipo= tipo;
        this.usuarios=usuarios;
        this.colacanciones=colacanciones;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getGenero() {
        return genero;
    }

    public void setGenero(String genero) {
        this.genero = genero;
    }

    public Set<Usuario> getUsuarios() {
        return usuarios;
    }

    public void setUsuarios(Set<Usuario> usuarios) {
        this.usuarios = usuarios;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public  List<Cancion> getColacanciones() {
        return colacanciones;
    }

    public void setColacanciones(List<Cancion> colacanciones) {
        this.colacanciones = colacanciones;
    }

   
    
    
}
