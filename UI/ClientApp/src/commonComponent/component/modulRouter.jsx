import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ModulRouter({ routers, onChangePathName }) {
    let location = useLocation()
	console.log(routers);
    useEffect(() => {
        debugger
        console.log(location.pathname);
    }, [location])

	return (
		<React.Fragment>abc</React.Fragment>
	)
}
