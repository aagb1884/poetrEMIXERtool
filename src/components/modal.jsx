function Modal ({setModalOpen}) {
    return (
        <div
        className="modal-wrapper"
      >
        <div
          className="modal"
          onClick={e => e.stopPropagation()}
        >
        <section className="text">
            <h1>Please Be Aware of Copyright Laws</h1> 
            <p>If you are looking to publish any remixes you must get permission to use the original work(s).</p>
        </section>
        <button className="modalExit-btn" onClick={() => setModalOpen(false)}>
            Click to Continue on this Site
        </button>
        </div>
        
        </div>
    )
};

export default Modal;