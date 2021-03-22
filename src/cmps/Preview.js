function Preview({ item }) {

    const img = require(`../assets/imgs/homepage/menu-items/${item.imgUrl}.jpg`).default;

    return (
        <div className="flex preview-container">
            <div className="preview-img-container">
                <div className="img-container">
                    <img src={img} alt="" />
                </div>
            </div>
            <div className="flex column preview-details">
                <div className="item-title">{item.title}</div>
                <div className="item-desc">{item.desc}</div>
            </div>
        </div>
    )
}

export { Preview }