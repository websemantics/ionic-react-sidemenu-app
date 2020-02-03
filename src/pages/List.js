import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { americanFootball, basketball, beer, bluetooth, boat, build, flask, football, paperPlane, wifi } from 'ionicons/icons'
import React from 'react'

const ListPage = () => {
  return (React.createElement(IonPage, null,
    React.createElement(IonHeader, null,
      React.createElement(IonToolbar, null,
        React.createElement(IonButtons, { slot: "start" },
          React.createElement(IonMenuButton, null)),
        React.createElement(IonTitle, null, "List"))),
    React.createElement(IonContent, null,
      React.createElement(ListItems, null))))
}

const ListItems = () => {
  const icons = [
    flask,
    wifi,
    beer,
    football,
    basketball,
    paperPlane,
    americanFootball,
    boat,
    bluetooth,
    build
  ]
  const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(x => {
    return (React.createElement(IonItem, { key: x },
      React.createElement(IonIcon, { icon: icons[x - 1], slot: "start" }),
      "Item ",
      x,
      React.createElement("div", { className: "item-note", slot: "end" },
        "This is item # ",
        x)))
  })
  return React.createElement(IonList, null, items)
}

export default ListPage
