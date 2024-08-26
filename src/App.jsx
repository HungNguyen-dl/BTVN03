import "./App.css";
// import Logo from "./assets/images/Logo.png";
// import images from "./assets/images/hatdieu.png";
import PageTwo from './PageTwo';
function App() {
  return (
    <PageTwo />
    // <div className="app-body">
    //   <div className="app-body-container">
    //     <h4 className="app-body-title">Yeu thich ngay</h4>
    //     <div className="app-body-group-header">
    //       <img src={Logo} alt="logo" />
    //       <p>
    //         Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm
    //         có ưu đãi
    //       </p>
    //     </div>

    //     <h4 className="app-body-title">Muc yeu thich cua ban</h4>

    //     <div className="app-body-form-search">
    //       <button className="app-body-btn-search">
    //         <i className="fa-solid fa-magnifying-glass"></i>
    //       </button>
    //       <input
    //         type="text"
    //         class="form-control app-body-form-control-search"
    //         placeholder="Tìm kiếm"
    //       ></input>
    //     </div>

    //     <div className="app-body-group-select">
    //       <select
    //         className="form-select form-one"
    //         aria-label="Default select example"
    //       >
    //         <option selected>Trạng thái</option>
    //         <option value="1">One</option>
    //         <option value="2">Two</option>
    //         <option value="3">Three</option>
    //       </select>
    //       <select
    //         className="form-select form-two"
    //         aria-label="Default select example"
    //       >
    //         <option selected>Danh Mục</option>
    //         <option value="1">One</option>
    //         <option value="2">Two</option>
    //         <option value="3">Three</option>
    //       </select>
    //       <select
    //         className="form-select form-three"
    //         aria-label="Default select example"
    //       >
    //         <option selected>Đã thêm gần đây</option>
    //         <option value="1">One</option>
    //         <option value="2">Two</option>
    //         <option value="3">Three</option>
    //       </select>

    //       <button className="app-body-group-select-btn">
    //         <i className="fa-solid fa-bars"></i>
    //       </button>
    //     </div>

    //     <div className="app-body-bottom">
    //       <div className="app-body-bottom-group-title">
    //         <h5>Quà Tặng</h5>
    //         <button className="app-body-bottom-group-title-btn">Tạo</button>
    //       </div>
    //       <div className="app-body-bottom-list-product">
    //         <div className="product-item">
    //           <img className="product-item-image" src={images} alt="" />
    //           <div className="row-top">
    //             <div className="row-top-title">Hạt điều rang muối</div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>
    //           <div className="row-bottom">
    //             <p className="row-bottom-price">199.000 VND</p>
    //             <p className="row-bottom-discount">99%</p>
    //           </div>
    //         </div>
    //         <div className="product-item">
    //           <img className="product-item-image" src={images} alt="" />
    //           <div className="row-top">
    //             <div className="row-top-title">Hạt điều rang muối</div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>
    //           <div className="row-bottom">
    //             <p className="row-bottom-price">199.000 VND</p>
    //             <p className="row-bottom-discount">99%</p>
    //           </div>
    //         </div>
    //         <div className="product-item">
    //           <img className="product-item-image" src={images} alt="" />
    //           <div className="row-top">
    //             <div className="row-top-title">Hạt điều rang muối</div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>
    //           <div className="row-bottom">
    //             <p className="row-bottom-price">199.000 VND</p>
    //             <p className="row-bottom-discount">99%</p>
    //           </div>
    //         </div>
    //         <div className="product-item">
    //           <img className="product-item-image" src={images} alt="" />
    //           <div className="row-top">
    //             <div className="row-top-title">Hạt điều rang muối</div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>
    //           <div className="row-bottom">
    //             <p className="row-bottom-price">199.000 VND</p>
    //             <p className="row-bottom-discount">99%</p>
    //           </div>
    //         </div>
    //         <div className="product-item">
    //           <img className="product-item-image" src={images} alt="" />
    //           <div className="row-top">
    //             <div className="row-top-title">Hạt điều rang muối</div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>
    //           <div className="row-bottom">
    //             <p className="row-bottom-price">199.000 VND</p>
    //             <p className="row-bottom-discount">99%</p>
    //           </div>
    //         </div>
    //         <div className="product-item">
    //           <img className="product-item-image" src={images} alt="" />
    //           <div className="row-top">
    //             <div className="row-top-title">Hạt điều rang muối</div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>
    //           <div className="row-bottom">
    //             <p className="row-bottom-price">199.000 VND</p>
    //             <p className="row-bottom-discount">99%</p>
    //           </div>
    //         </div>
    //         <div className="product-item">
    //           <img className="product-item-image" src={images} alt="" />
    //           <div className="row-top">
    //             <div className="row-top-title">Hạt điều rang muối</div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>
    //           <div className="row-bottom">
    //             <p className="row-bottom-price">199.000 VND</p>
    //             <p className="row-bottom-discount">99%</p>
    //           </div>
    //         </div>
    //         <div className="product-item">
    //           <img className="product-item-image" src={images} alt="" />
    //           <div className="row-top">
    //             <div className="row-top-title">Hạt điều rang muối</div>
    //             <button>
    //               <i className="fa-solid fa-cart-shopping"></i>
    //             </button>
    //           </div>
    //           <div className="row-bottom">
    //             <p className="row-bottom-price">199.000 VND</p>
    //             <p className="row-bottom-discount">99%</p>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="app-body-pagination">
    //       <nav aria-label="Page navigation example">
    //         <ul className="pagination">
    //           <li className="page-item">
    //             <a className="page-link" href="#" aria-label="Previous">
    //               <span aria-hidden="true">&laquo;</span>
    //             </a>
    //           </li>
    //           <li className="page-item">
    //             <a className="page-link" href="#">
    //               1
    //             </a>
    //           </li>
    //           <li className="page-item">
    //             <a className="page-link" href="#">
    //               2
    //             </a>
    //           </li>
    //           <li className="page-item">
    //             <a className="page-link" href="#">
    //               3
    //             </a>
    //           </li>
    //           <li className="page-item">
    //             <a className="page-link" href="#" aria-label="Next">
    //               <span aria-hidden="true">&raquo;</span>
    //             </a>
    //           </li>
    //         </ul>
    //       </nav>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
