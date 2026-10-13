const { createApp } = Vue;

createApp({
    data() {
        return {
            tuKhoa: '',
            products: [
                { id: 1, ten: 'Electric Blue Case', gia: 250000, hinhAnh: 'https://picsum.photos/id/1060/300/300' },
                { id: 2, ten: 'Clear White Case', gia: 180000, hinhAnh: 'https://picsum.photos/id/160/300/300' },
                { id: 3, ten: 'Wireless Charger Pad', gia: 350000, hinhAnh: 'https://picsum.photos/id/201/300/300' },
                { id: 4, ten: 'Active TWS Earbuds', gia: 550000, hinhAnh: 'https://picsum.photos/id/250/300/300' },
                { id: 5, ten: 'Leather Stand Case', gia: 290000, hinhAnh: 'https://picsum.photos/id/367/300/300' },
                { id: 6, ten: 'Fast Charging Cable', gia: 120000, hinhAnh: 'https://picsum.photos/id/48/300/300' }
            ],
            cart: []
        }
    },

    computed: {
        danhSachLoc() {
            return this.products.filter(sp =>
                sp.ten.toLowerCase().includes(this.tuKhoa.toLowerCase())
            );
        },
        cartCount() {
            return this.cart.reduce((sum, item) => sum + item.soLuong, 0);
        },
        tongTien() {
            return this.cart.reduce((sum, item) => sum + (item.gia * item.soLuong), 0);
        }
    },

    methods: {
        themVaoGio(sanPham) {
            const itemIndex = this.cart.findIndex(item => item.id === sanPham.id);
            if (itemIndex > -1) {
                this.cart[itemIndex].soLuong++;
            } else {
                this.cart.push({ ...sanPham, soLuong: 1 });
            }
        },
        xoaKhoiGio(index) {
            this.cart.splice(index, 1);
        },
        formatGia(value) {
            return new Intl.NumberFormat('vi-VN').format(value);
        }
    }
}).mount('#app');