const ShowPicture = ({ selected }) => {
  return (
    <section id="gallery-single" className="gallery-single">
      <div className="container">
        <div className="row justify-content-between gy-4 mt-4">
          <div className="col-lg-8">
            <div className="portfolio-description">
              <h2>This is an example of portfolio detail</h2>
              <p>
                You can fetch description and push it here. For this exercise i
                don't have
              </p>
            </div>
          </div>

          <img src={selected.url} alt={selected.name}></img>

          <div className="col-lg-3">
            <div className="portfolio-info">
              <h3>Project information</h3>
              <ul>
                <li>
                  <strong>Name</strong> <span>Hoang Tran Thien Khoi</span>
                </li>
                <li>
                  <strong>MSSV</strong> <span>19120260</span>
                </li>
                <li>
                  <strong>BTCN03</strong> <span>MEME LIST</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowPicture;
