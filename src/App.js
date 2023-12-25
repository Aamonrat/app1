import logo from './logo.svg';

import React from 'react';

function App() {
    let r = 'React'
    let rn = 'React Native'
    const el = (
        <div>
            Create Web & Mobile Apps<br/>
            with <span dangerouslySetInnerHTML={{_html: r }}/> & {rn}
        </div>
    )
    return el 
}

export default App;