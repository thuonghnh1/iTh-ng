// var images = [
//   "https://i.pinimg.com/564x/a7/93/09/a79309535ddfee8e6a26b4402854eea1.jpg",
//   "https://i.pinimg.com/564x/ad/bb/91/adbb9135bef1e8785bb164d646e88a09.jpg",
//   "https://i.pinimg.com/736x/e2/0c/77/e20c77364c0efc01eae9f9d289380577.jpg",
//   "https://i.pinimg.com/564x/5d/72/4f/5d724f12176a1b60849ce5259eb96d86.jpg"
// ];
// var num = 0;

// function next() {
//   var slider = document.getElementById("slider");
//   num++;
//   if (num >= images.length) {
//     num = 0;
//   }
//   slider.src = images[num];
// }

// function back() {
//   var slider = document.getElementById("slider");
//   num--;
//   if (num < 0) {
//     num = images.length - 1;
//   }
//   slider.src = images[num];
// }

let arrayImage = [
  "https://i.pinimg.com/564x/cf/9c/09/cf9c0940463a550e2e0de4413675d29a.jpg",
  "https://i.pinimg.com/564x/ad/bb/91/adbb9135bef1e8785bb164d646e88a09.jpg",
  "https://i.pinimg.com/736x/e2/0c/77/e20c77364c0efc01eae9f9d289380577.jpg",
  "https://i.pinimg.com/564x/5d/72/4f/5d724f12176a1b60849ce5259eb96d86.jpg"
];
let btn_first = document.querySelectorAll('button');
let img_slider = document.querySelector('.wrapper_slider img');
let currentIndex = -1;
btn_first.forEach((element) => {
  element.addEventListener('click', () => {
    let text = element.innerText;
    switch (text) {
      case 'first':
        currentIndex = 0;
        img_slider.setAttribute('src', arrayImage[currentIndex]);
        break;
      case 'prev':
        if (currentIndex > 0) {
          currentIndex--;
          img_slider.setAttribute('src', arrayImage[currentIndex]);
        }
        break;
      case 'next':
        if (currentIndex < arrayImage.length - 1) {
          currentIndex++;
          img_slider.setAttribute('src', arrayImage[currentIndex]);
        }
        break;
      case 'last':
        currentIndex = arrayImage.length - 1;
        console.log(currentIndex);
        img_slider.setAttribute('src', arrayImage[currentIndex]);
        break;
      default:
        break;
    }
  });
});

// hover
let elements = document.querySelectorAll('.container .A1');
const icons = document.querySelectorAll('.icon');
elements.forEach(element => {
  element.addEventListener('mouseover', function () {
    let child = this.querySelector('.icon');
    child.classList.add('show');
  });
  element.addEventListener('mouseleave', function () {
    let child = this.querySelector('.icon');
    child.classList.remove('show');
  });
});

// giỏ hàng
// Mảng lưu trữ sp trong giỏ hàng
const cart = [];

const addSP = document.querySelectorAll('ion-icon[name="add-outline"]');
addSP.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Lấy thông tin sp
    const sp = event.target.closest('.A1');

    if (sp) {
      const productId = cart.length + 1;
      const productName = sp.querySelector('.sp h3').innerText;
      const productPrice = Number(sp.querySelector('.gia .new').innerText.replace('$', '')) || 0;
      const productQuantity = 1;

      const product = {
        id: productId,
        name: productName,
        price: productPrice,
        quantity: productQuantity
      };

      const existingSP = cart.find((item) => item.id === productId);

      if (existingSP) {
        existingSP.quantity++;
      } else {
        cart.push(product);
      }

      alert(`Đã thêm sản phẩm ${productName} vào giỏ hàng`);

      updateCart();
    }
  });
});

function updateCart() {
  const cartCount = document.querySelector('.cart span');

  if (cartCount) {
    cartCount.innerText = cart.length;
  }

  
  const list = document.querySelector('.list');

  if (list) {
    list.innerHTML = '';

    cart.forEach((item) => {
      const li = document.createElement('li');
      li.innerText = `${item.name} x${item.quantity} - $${item.price * item.quantity}`;
      list.appendChild(li);
    });
  }

  const price = document.querySelector('.price');

  if (price) {
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    price.innerText = `$${total}`;
  }
}


// hiển thị cart
const cartIcon = document.querySelector('.cart');
const shoppingCart = document.querySelector('.shoppingCart');

cartIcon.addEventListener('mouseenter', () => {
  shoppingCart.style.display = 'block';
});

cartIcon.addEventListener('mouseleave', () => {
  shoppingCart.style.display = 'none';
});

// like sp
const heartIcon = document.querySelectorAll('.heart');
heartIcon.forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });
});



//media
const video = document.querySelector('video');
video.currentTime = 5;
function playPause() {
  video.paused ? video.play() : video.pause();
}
function stopV() {
  video.pause();
  if (video.currentTime) {
    video.currentTime = 0;
  }
}
function replay() {
  video.currentTime = 0;
  video.play();
}
function turnUp() {
  if (video.volume < 1) {
    video.volume = parseFloat(video.volume + 0.1).toFixed(1);
  }
}
function turnDown() {
  if (video.volume > 0) {
    video.volume = parseFloat(video.volume - 0.1).toFixed(1);
  }
}
function mute() {
  if (video.muted) {
    video.muted = false;
  } else {
    video.muted = true;
  }
}

// kiểm lỗi form
const form = document.querySelector('.form');
const ten = form.querySelector('.ten');
const emai = form.querySelector('.email');
const phone = form.querySelector('.phone');

ten.addEventListener('change', () => {
  if (ten.value.trim() === '') {
    alert('Vui lòng nhập họ tên của bạn');
  }
  const regexName = /\d/;
  if (regexName.test(ten.value)) {
    alert("Tên không được chứa chữ số");
  }
});

emai.addEventListener('change', () => {
  const mail = emai.value.trim();
  const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  if (!regexEmail.test(mail)) {
    alert('Vui lòng nhập địa chỉ email hợp lệ');
  }
});

phone.addEventListener('change', () => {
  const sdt = phone.value.trim();
  const regexPhone = /^0\d{9}$/;

  if (regexPhone.test(sdt)== false) {
    alert('Vui lòng nhập số điện thoại hợp lệ');
  }
});

// Gửi form
// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   if (ten.value.trim() === '' || emai.value.trim() === '' || phone.value.trim() === '') {
//     alert('Vui lòng điền đầy đủ thông tin để đặt hàng');
//     return;
//   } else {
//     alert('Đặt hàng thành công');
//   }
// });
