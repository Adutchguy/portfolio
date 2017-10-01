import './_code-fellows-modal.scss';
import React, { Component } from 'react';

class CodeFellowsModal extends React.Component {
  constructor(props){
    super(props);

    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick(e) {
    if (e.target.parentNode.className !== 'app') {
      return;
    }

    this.props.handleCodeFellowsModalClickEvent(e);
  }

  render() {
    return (
      <div onClick={this.handleOutsideClick} className='code-fellows-modal'>
        <div className='code-fellows-modal-body'>
          <h3> Completed Courses </h3>
          <ul>
            <li>
              <h4>Code 201 – Foundations of Software Development</h4>
              <p><strong>Description: </strong> This course guides students toward developing a well-rounded foundation of skills necessary for modern web development. These skills include HTML, CSS, and JavaScript coding; utilizing Git workflow processes; project organization; designing with wireframing; and employing introductory Agile development methods.</p>
            </li>

            <li>
              <h4>Code 301 – Intermediate Software Development</h4>
              <p><strong>Description: </strong> In this intensive course, you will study the common core of software development, including MVC architecture, object-oriented and functional programming, and computer science fundamentals such as basic data structures and algorithms. Come learn how to create and launch web apps in HTML, CSS, and JavaScript, with the help of third-party APIs and libraries from around the web.</p>
            </li>

            <li>
              <h4>Code 401 – Advanced Software Development </h4>
              <p><strong>Description: </strong> Students will learn to build full-stack applications. The first four weeks focus on building back-end web applications with Node.js. During weeks six through nine, students learn to build web apps with modern front-end libraries and frameworks. This course goes in depth into the core competencies of JavaScript, object-oriented programming, and functional programming. Students get hands-on practice in test-driven development with agile tools and best practices.</p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default CodeFellowsModal;
