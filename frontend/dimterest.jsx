import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';


// document.addEventListener('DOMContentLoaded', () => {
//   window.store = configureStore();
  
//   let store;
//   if (window.currentUser) {
//     const preloadedState = {
//       session: { id: window.currentUser.id },
//       entities: {
//         users: { [window.currentUser.id]: window.currentUser }
//       }
//     };
//     store = configureStore(preloadedState);
//     delete window.currentUser;
//   } else {
//     store = configureStore();
//   }
//   const root = document.getElementById('root');
//   ReactDOM.render(<Root store={store} />, root);
// });

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = configureStore(preloadedState);
  window.store = store;
  // const store = createStore();

  ReactDOM.render(<Root store={store} />, root);
})
