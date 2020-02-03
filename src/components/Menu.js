import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import { withRouter } from 'react-router-dom'

const Menu = ({ appPages }) => (React.createElement(IonMenu, { contentId: "main", type: "overlay" },
  React.createElement(IonHeader, null,
    React.createElement(IonToolbar, null,
      React.createElement(IonTitle, null, "Menu"))),
  React.createElement(IonContent, null,
    React.createElement(IonList, null, appPages.map((appPage, index) => {
      return (React.createElement(IonMenuToggle, { key: index, autoHide: false },
        React.createElement(IonItem, { routerLink: appPage.url, routerDirection: "none" },
          React.createElement(IonIcon, { slot: "start", icon: appPage.icon }),
          React.createElement(IonLabel, null, appPage.title))))
    })))))

export default withRouter(Menu)
