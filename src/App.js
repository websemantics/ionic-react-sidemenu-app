import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react'
import { IonReactHashRouter } from '@ionic/react-router'
import { home, list } from 'ionicons/icons'
import Menu from './components/Menu.js'
import Home from './pages/Home.js'
import List from './pages/List.js'

const appPages = [
  {
    title: 'Home',
    url: '/home',
    icon: home
  },
  {
    title: 'List',
    url: '/home/list',
    icon: list
  }
]

const App = () => (React.createElement(IonApp, null,
  React.createElement(IonReactHashRouter, null,
    React.createElement(IonSplitPane, { contentId: "main" },
      React.createElement(Menu, { appPages: appPages }),
      React.createElement(IonRouterOutlet, { id: "main" },
        React.createElement(Route, { path: "/home", component: Home, exact: true }),
        React.createElement(Route, { path: "/home/list", component: List, exact: true }),
        React.createElement(Route, { path: "/", render: () => React.createElement(Redirect, { to: "/home" }), exact: true }))))))
export default App
