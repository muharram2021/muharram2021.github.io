const Technology = ({technology}) => {
    return (
        <div className="card col-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{technology.name}</h5>
                <p className="card-text">{technology.description}</p>
                <a href="#" className="btn btn-primary">Add</a>
            </div>
        </div>
    )
}

export default Technology