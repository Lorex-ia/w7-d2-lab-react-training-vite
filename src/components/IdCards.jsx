function IdCard({firstName, lastName, gender, height, birth, picture}){
    return(
<div>
    <p>{firstName} </p>
    <p>{lastName} </p>
    <p>{gender} </p>
    <p>{height} </p>
    <p> {JSON.stringify({birth})} </p>
    <img src={picture} alt="img"/>
</div>

)
}
    

export default IdCard;
