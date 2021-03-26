function Footer() {
    return (
        <div className="flex align-center footer-container">
            <div className="flex footer-content-container main-container w100">
                <h2>dine</h2>
                <div className="flex footer-info-container">
                    <div className="flex column uppercase address-container">
                        <div>Marthwaite, Sedbergh</div>
                        <div>Cumbria</div>
                        <div>+00 44 123 4567</div>
                    </div>
                    <div className="flex column uppercase">
                        <div>Open Times</div>
                        <div>Mon - Fri: 09:00 AM - 10:00 PM</div>
                        <div>Sat - Sun: 09:00 AM - 11:30 PM</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Footer };