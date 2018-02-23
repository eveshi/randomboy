import React, { Component } from 'react';
import Person from '../../components/person/person';
import RandomName from '../../components/randomName/randomName';
import classes from './randomPeople.css';

class RandomPeople extends Component {
    state = {
        peopleName: [
            
        ],
        newNameList: [
            
        ],
        personName: { id:'', name:'' },
        peopleNumber: 0,        
    }

    inputPeople = ( event ) => {
        this.setState({
            peopleNumber: event.target.value
        });
        }

        addName = ( event ) => {
        let nameItem = {...this.state.personName}
        nameItem.name = event.target.value;
        nameItem.id = Math.random()
        this.setState({
            personName: nameItem
        });

    }

    enterKey = ( event ) => {
        let nameList = [...this.state.peopleName];
        let name = this.state.personName;
        if( event.key === 'Enter' ){
            nameList = [name, ...nameList];
            name = { id:'', name:'' };
        };
        this.setState({
            peopleName: nameList,
            personName: name
        });
    }

    newOrder = () => {
        const nameList = this.state.peopleName;
        const newNameList = nameList.sort(( a, b ) => ( a.id - b.id ));
        this.setState({
            newNameList: newNameList
        });
    }

    render () {
        return (
            <div className={classes.content}>
                <Person 
                    change={this.inputPeople} 
                    person={this.state.peopleNumber} />
                <RandomName 
                    enterKey={this.enterKey}
                    changeName={this.addName}
                    newOrder={this.newOrder}
                    name={this.state.personName.name}
                    input={this.state.peopleName}
                    output={this.state.newNameList} /> 
            </div>
        )
    }
};

export default RandomPeople;