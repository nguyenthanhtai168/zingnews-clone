class MenuViewModel {
  constructor() {
    this.menu = ko.observable([
      "Xuất bản",
      "Sách",
      "Tác giả",
      "Xã hội",
      "Pháp luật",
      "Thế giới",
      "Kinh doanh",
      "Công nghệ",
      "Sức khỏe",
      "Thể thao",
      "Giải trí",
      "Đời sống",
      // "Giáo dục",
      // "Du lịch",
      // "Xe"
    ]);

  }
}

class HashTag {
  constructor() {
    this.hashTag = ko.observable([
      {
        title: "Chạy đua Nhà Trắng 2020",
        url: "https://zingnews.vn/bau-cu-tong-thong-my-2020.html?src=home_trending"
      },
      {
        title: "Tiến tới Đại hội Đảng XIII",
        url: "https://zingnews.vn/dai-hoi-dang-xiii.html?src=home_trending"
      },
      {
        title: "TT Trump mắc Covid-19",
        url: "https://zingnews.vn/tieu-diem/trump-mac-covid-19.html?src=home_trending"
      }
    ]);
  }
}

class TrendingNews {
  constructor() {
    var data = [
      {
        title: "Vì sao ông Nguyễn Văn Nên được phân công về TP.HCM ngay trước Đại hội?",
        url: "https://zingnews.vn/bao-so-6-do-bo-quang-nam-quang-ngai-post1140557.html",
        alt: "Vi sao ong Nguyen Van Nen duoc phan cong ve TP.HCM ngay truoc Dai hoi",
        img: "https://znews-photo.zadn.vn/w210/Uploaded/ovhpaob/2020_10_11/49f434a049d3b78deec2_1.jpg",
        category: "trending"
      },
      {
        title: "Nghi phạm cướp ngân hàng từng thi Thách thức danh hài",
        url: "https://zingnews.vn/gioi-thieu-ong-nguyen-van-nen-de-bau-bi-thu-thanh-uy-tphcm-post1140428.html",
        alt: "",
        img: "https://znews-photo.zadn.vn/w210/Uploaded/bpivpbbp/2020_10_11/phungthithang2.jpg",
        category: "trending"
      },
      {
        title: "TT Trump mắc Covid-19",
        url: "https://zingnews.vn/dac-cong-dua-toan-bo-thuyen-vien-tau-vietship-01-vao-bo-post1140517.html",
        alt: "",
        img: "https://znews-photo.zadn.vn/w210/Uploaded/aohunkx/2020_08_14/d93af6374e94b3caea85.jpg",
        category: "trending"
      },
      {
        title: "Thiếu niên 15 tuổi sắp được phong thánh",
        url: "https://zingnews.vn/thieu-nien-15-tuoi-sap-duoc-phong-thanh-post1140493.html",
        alt: "Thieu nien 15 tuoi sap duoc phong thanh hinh anh",
        img: "https://znews-photo.zadn.vn/w210/Uploaded/sgtnrb/2020_10_11/carlo11.jpg",
        category: "trending"
      },
      {
        title: "Nỗi ám ảnh của những ca sĩ bị ép mặc sexy",
        url: "https://zingnews.vn/noi-am-anh-cua-nhung-ca-si-bi-ep-mac-sexy-post1140397.html",
        alt: "Noi am anh cua nhung ca si bi ep mac sexy hinh anh",
        img: "https://znews-photo.zadn.vn/w210/Uploaded/qfssu/2020_10_10/avanhom_nu.jpg",
        category: "trending"
      },
      {
        title: "Đặc công đưa toàn bộ thuyền viên tàu Vietship 01 vào bờ",
        url: "https://zingnews.vn/noi-am-anh-cua-nhung-ca-si-bi-ep-mac-sexy-post1140397.html",
        alt: "Noi am anh cua nhung ca si bi ep mac sexy hinh anh",
        img: "https://znews-photo.zadn.vn/w960/Uploaded/qxwpzdjwp/2020_10_11/z2119946948357_4100a27e94b1fb04217a44279a8ecc14.jpg",
        category: "primary",
        desc: "Sáng 11/10, đặc công nước cùng trực thăng hỗ trợ đưa tất cả thuyền viên tàu Vietship 01 vào bờ an toàn.",
        related: [
          {
            title: "8 người trên tàu Vietship 01 gặp nạn được đưa vào bờ",
            url: "https://zingnews.vn/8-nguoi-tren-tau-vietship-01-gap-nan-duoc-dua-vao-bo-post1140501.html",
          }
        ]
      },
      {
        title: "Bão số 6 đổ bộ Quảng Nam - Quảng Ngãi",
        url: "https://zingnews.vn/bao-so-6-do-bo-quang-nam-quang-ngai-post1140557.html",
        alt: "Bao so 6 do bo Quang Nam - Quang Ngai hinh anh",
        img: "https://znews-photo.zadn.vn/w480/Uploaded/lce_qjlcv/2020_10_11/bao_trua_11.10_thumb.jpg",
        category: "related"
      },
      {
        title: "Giới thiệu ông Nguyễn Văn Nên để bầu Bí thư Thành ủy TP.HCM",
        url: "https://zingnews.vn/gioi-thieu-ong-nguyen-van-nen-de-bau-bi-thu-thanh-uy-tphcm-post1140428.html",
        alt: "Gioi thieu ong Nguyen Van Nen de bau Bi thu Thanh uy TP.HCM hinh anh",
        img: "https://znews-photo.zadn.vn/w480/Uploaded/ofh_cgmzstgk/2020_10_10/nen.jpg",
        category: "related"
      }
    ];

    this.trendingNews = data.filter(s => s.category === "trending");
    this.primary = data.filter(s => s.category === "primary");
    this.primaryRelated = data.filter(s => s.category === "related");
  }
}

if (document.getElementById('header') || document.getElementById("hot-new")) {
  ko.applyBindings(new MenuViewModel(), document.getElementById('header'));
}

if (document.getElementById("hot-new")) {
  ko.applyBindings(new HashTag(), document.getElementById('hot-new'));
}

if (document.getElementById("featured-news")) {
  ko.applyBindings(new TrendingNews(), document.getElementById('featured-news'));
}
