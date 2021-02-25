import React, { useState } from 'react';

export const WebContext = React.createContext();

const Provider = props => {
const [isMenuVisible, setMenuVisible] = useState(false);
const [isLogoHeaderVisible, setLogoHeaderVisible] = useState(false)

return (
	<WebContext.Provider value={{
		isMenuVisible,
		toggleMenu: () => setMenuVisible(!isMenuVisible),
        isLogoHeaderVisible,
        toggleLogoHeader: (value) => setLogoHeaderVisible(value)
	}}>
	{props.children}
	</WebContext.Provider>
	)
};

export default ({ element }) => (
	<Provider>
		{element}
	</Provider>
);