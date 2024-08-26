import images from "./assets/images/hatdieu.png";

const PageTwo = () => {
  return (
    <div className="product-body">
      <div className="product-body-container">
        <div className="product-body-btn">
          <button className="product-body-btn-delete-one">
            <i class="fa-solid fa-trash-can"></i>
          </button>
          <button className="product-body-btn-delete-two">
            <i class="fa-solid fa-x"></i>
          </button>
        </div>
        <div className="product-body-header">
          <img className="product-body-header-image" src={images} alt="" />
          <div className="product-body-content">
            <div className="product-body-content-title">
              <h1>Ngũ hạt thập cẩm, hũ trang trí ý nghĩa</h1>
            </div>
            <div className="product-body-content-evaluate">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-regular fa-star"></i>
              <i class="fa-regular fa-star"></i>
            </div>

            <div className="product-body-content-price">
              <h2>Giá: 42.000 VND</h2>
              <i class="fa-solid fa-arrow-down">30%</i>
            </div>
            <div className="product-body-content-classify">
              <h2>Phân Loại</h2>
            </div>
            <div className="product-body-content-btn-classify">
              <button className="product-body-content-btn-small">Nhỏ</button>
              <button className="product-body-content-btn-nomal">Vừa</button>
              <button className="product-body-content-btn-large">Lớn</button>
            </div>
            <div className="product-body-content-btn">
              <button className="product-body-content-btn-sub">
                <i class="fa-solid fa-minus"></i>
              </button>
              <div className="product-body-content-quantity">
                <p>0</p>
              </div>
              <button className="product-body-content-btn-add">
                <i class="fa-solid fa-plus"></i>
              </button>
              <button className="product-body-content-btn-buy">Chọn Mua</button>
            </div>
          </div>
        </div>
        <div className="product-body-info">
          Ngũ hạt thập cẩm đặc sản Langfarm - Món ăn vặt ưa thích, hương vị thơm
          ngon, an toàn vệ sinh. Phù hợp làm quà vào các dịp lễ, thân thiện với
          mọi nhà
        </div>
        <div className="product-body-comment">
            <div className="product-body-comment-head">
                <img src={images} alt="" />
                <h3>John Doe</h3>
            </div>
            <p>Sản phẩm này sẽ mua tặng cho gia đình sau ngày 15 nè!</p>
            <hr />
            <div className="product-body-comment-foot">
            <i class="fa-solid fa-bold"></i>
            <i class="fa-solid fa-italic"></i>
            <i class="fa-solid fa-underline"></i>
            <button className="product-body-comment-foot-btn">Comment</button>
            </div>
        </div>
        
        <div className="product-body-note">
        <h1>Ghi Chú</h1>
        <hr />
        <h4>Danh sách ghi chú</h4>
        </div>
        <div className="product-body-comment">
            <div className="product-body-comment-head">
                <img src={images} alt="" />
                <h3>You</h3>
            </div>
            <p>Lưu lại đã, rồi mấy nữa tính tiếp...</p>
            
            <div className="product-body-comment-foot">
            <p>5 min ago</p>
            <button className="product-body-comment-delete"><i class="fa-solid fa-trash-can"></i></button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
