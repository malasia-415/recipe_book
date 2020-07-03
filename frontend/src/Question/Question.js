import React, {Component} from 'react';
import axios from 'axios';

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
    };
  }

  async componentDidMount() {
    const { match: { params } } = this.props;
    const question = (await axios.get(`http://localhost:8081/${params.questionId}`)).data;
    this.setState({
      question,
    });
  }