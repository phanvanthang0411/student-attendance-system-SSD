import React, { useEffect } from 'react'

const HomeContent = () => {
    useEffect(() => {
        fetch('http://localhost:5000/User/users')
            .then((res) => {
				console.log(res)
                return res
            })
            .then((data) => {
                console.log(data)
            })
    }, [])
    return <div>Hiện tại bạn chưa có tin tức mới.</div>
}

export default HomeContent
