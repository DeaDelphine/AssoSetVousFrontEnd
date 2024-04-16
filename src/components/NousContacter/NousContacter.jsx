
const NousContacter = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card border-white rounded p-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nom</label>
                                <input type="text" id="name" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" id="email" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" rows="4"></textarea>
                            </div>

                            <div className="mb-3">
                                <input
                                    className="form-check-input me-2"
                                    type="checkbox"
                                    value=""
                                    id="copy"
                                />
                                <label className="form-check-label" htmlFor="copy">
                                    Envoyez-moi une copie de ce message
                                </label>
                            </div>

                            <button type="button" className="btn btn-primary btn-block">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NousContacter;
