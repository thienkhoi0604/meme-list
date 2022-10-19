import "./PageHeader.css";

const PageHeader = ({ onClick }) => {
  return (
    <div className="page-header d-flex align-items-center">
      <div className="container position-relative">
        <div className="row d-flex justify-content-center">
          <div className="col-lg-6 text-center">
            <h2>Meme List</h2>
            <p>This is BTCN03-Meme list</p>

            <div className="cta-btn" onClick={onClick}>
              Get Images
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
