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

if (document.getElementById('header')) {
  ko.applyBindings(new MenuViewModel(), document.getElementById('header'));
}
