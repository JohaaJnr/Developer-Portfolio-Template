import React, { Component } from 'react';
const Context = React.createContext();
export class Provider extends Component {

state = {

    userName: 'Anwarul Haque Johaa',
    title: 'Full-Stack Developer',
    profileImg:  require('../img/eng.jpg'),
    phoneNo: '+8801677497966',
    email: 'avoid.zoha@gmail.com',
    githubUrl: 'https://github.com/JohaaJnr',
    linkedIn: 'https://www.linkedin.com/in/johaajnr',
    fbUrl: 'https://www.facebook.com/johaajnrr',
    Education: {
        gradSchool:{
            name: 'East West University',
            timelapse: 'Classes of 2020',
            dept: 'BSc in Computer Science & Engineering'
        },
        college: {
            name: 'Govt Science College',
            timelapse: 'Classes of 2013',
            dept: 'Science'
        },
        school:{
            name: 'Motijheel Govt Boys School',
            timelapse: 'Classes of 2011',
            dept: 'Science'
        }
    },
    Professional: [
        {
            company: 'Freelance Developer',
            timelapse: 'Since 2019 - Present'
        },
        {
            company: 'Ayan Tech Limited',
            timelapse: 'Since Jan 2022-Present'
        }
    ],

    Projects: [
        {
            React: [
                {
                    title: 'React Task Tracker',
                    projectImg:  require('../img/mernappp.JPG'),
                    projectUrl: 'https://mern-app-fullstack.herokuapp.com'
                },
                {
                    title: 'Youtube-mp3 Converter',
                    projectImg: require('../img/mp3converter.JPG'),
                    projectUrl: 'https://tomp3convert.herokuapp.com'
                }
            ]
        },
        {
            Node: [
                {
                    title: 'Node Login Oauth Passport Task Manager',
                    projectImg: require('../img/nodeapp.JPG'),
                    projectUrl: 'https://nodeloginoauth20.herokuapp.com'
                },
                {
                    title: 'Chatbot App',
                    projectImg: require('../img/chatapp.JPG'),
                    projectUrl: 'https://simplechatbothero.herokuapp.com'
                }
            ]
        },
        {
            Laravel: [
                {
                    title: 'Laravel CRUD Task Manager',
                    projectImg: require('../img/laravelapp.JPG'),
                    projectUrl: 'https://github.com/JohaaJnr/laravelCRUDauthentication'
                }
            ]
        }

    ]
        
    
}

  render() {
    return (
        <Context.Provider value={this.state}>
            {this.props.children}
        </Context.Provider>
    )
  }
}

export const Consumer = Context.Consumer