import React, {Component} from 'react';
import SPEXHeader from './SPEXHeader.js';

class Main extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return(
            <div>
                <SPEXHeader />
                {this.props.children}
            </div>
        );
    }
}

export default Main;