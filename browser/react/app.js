'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main';
import Sidebar from './Sidebar';
import Footer from './Footer';


ReactDOM.render(<Sidebar />, document.getElementById('sidebar'));
ReactDOM.render(<Main />, document.getElementById('main'));
