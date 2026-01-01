export default function CARDS(props){
return (
<>
<div className="card">
    < div className="card-header">
        <img src={props.img} alt="img" />

        <div className="bookmark">
            <img src="#" alt="bookmark" />
            <h4>save</h4>
        </div>
        </div>
        <div className="main">
            <h6>{props.name}</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora maxime aperiam laboriosam error nesciunt provident ullam accusantium</p>
        </div>
</div>
</>
)
}
