import axios from 'axios';
import React, { Component } from 'react';
import TitleText from '../components/title-text';

class Ex003 extends Component {
  state = { persons: [] };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({ persons });
    });
  }

  render() {
    return (
      <div>
        <TitleText title="Test Call Rest" />
        <ul>
          {this.state.persons.map(person => (
            <li>{person.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Ex003;
