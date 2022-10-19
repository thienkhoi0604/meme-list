import "./Item.css";

const Item = ({ item, onClick }) => {
  return (
    <div
      className="gallery-item h-100"
      onClick={() => {
        onClick(item);
      }}
    >
      <img src={item.url} className="img-fluid" alt={item.name} />
      <div className="gallery-links d-flex align-items-center justify-content-center">
        <div className="glightbox preview-link">
          <i className="bi bi-arrows-angle-expand"></i>
        </div>
      </div>
    </div>
  );
};

export default Item;
