
function Message({username,textColor}){
    return (
        <>
        <h3 style={{backgroundColor:textColor}} >Hello {username}</h3>
        </>
    )
}

export default Message;