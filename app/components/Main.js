import React from 'react';
import {render} from 'react-dom';
import Dropdown from './Dropdown.jsx';
import {dropdownValues} from './data.jsx';


var element = React.createElement(Dropdown, dropdownValues);

render(element, document.querySelector('.app'));

