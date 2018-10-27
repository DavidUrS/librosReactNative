import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import Libros from './Libros';

class LibrosList extends Component{
    state = {
        libros: []
    };
    componentWillMount(){
        try {
            fetch('https://www.googleapis.com/books/v1/volumes?q=stranger+inauthor:williams&apikey=AIzaSyDrVFq3aapvI1dcE-pw0XaypW4G7aVDL-Q')
            .then(response=>response.json())
            .then(responseJson=>{
                this.setState({
                    libros:responseJson.items
                })
            })

        } catch (error) {
            console.log(error)
        }
    }
    render(){
        return(
            <ScrollView>
                {this.mostrarLibros()}
            </ScrollView>
        )
    }
    mostrarLibros(){
        return this.state.libros.map(libro => 
            <Libros key={libro.id} dataLibro={libro}/>
        )
    }
}

export default LibrosList;