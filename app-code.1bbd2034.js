const generateProducts = (num)=>{
    const names = [
        "Laptop",
        "Smartphone",
        "Tai nghe",
        "B\xe0n ph\xedm",
        "Chu\u1ED9t",
        "M\xe0n h\xecnh",
        "M\xe1y t\xednh b\u1EA3ng",
        "Loa Bluetooth",
        "\u0110\u1ED3ng h\u1ED3 th\xf4ng minh",
        "S\u1EA1c d\u1EF1 ph\xf2ng",
        "Camera IP",
        "Router Wi-Fi",
        "\u1ED4 c\u1EE9ng SSD",
        "M\xe1y in",
        "Tay c\u1EA7m ch\u01A1i game",
        "Micro thu \xe2m",
        "Webcam",
        "T\u1EA3n nhi\u1EC7t",
        "Ngu\u1ED3n m\xe1y t\xednh",
        "Gh\u1EBF Gaming"
    ];
    const adjectives = [
        "Pro Max",
        "Ultra Gaming",
        "Th\u1EBF h\u1EC7 12",
        "Ch\u1ED1ng n\u01B0\u1EDBc IP68",
        "Kh\xf4ng d\xe2y",
        "Si\xeau m\u1ECFng nh\u1EB9",
        "C\u01A1 h\u1ECDc RGB",
        "Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
        "M\xe0n h\xecnh OLED",
        "Pin kh\u1EE7ng 5000mAh",
        "Nh\xf4m nguy\xean kh\u1ED1i",
        "K\u1EBFt n\u1ED1i \u0111a \u0111i\u1EC3m",
        "\u0110\u1ED9 ph\xe2n gi\u1EA3i 4K",
        "T\u1ED1c \u0111\u1ED9 cao",
        "Phi\xean b\u1EA3n gi\u1EDBi h\u1EA1n",
        "Thi\u1EBFt k\u1EBF Ergonomic",
        "S\u1EA1c nhanh 65W",
        "\xc2m thanh Hi-Res",
        "B\u1EA3o h\xe0nh 2 n\u0103m",
        "H\u1ED7 tr\u1EE3 AI"
    ];
    return Array.from({
        length: num
    }, (_, i)=>{
        const randomName = names[Math.floor(Math.random() * names.length)];
        const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const productName = `${randomName} ${randomAdj}`;
        // Tạo mô tả ít nhất 30 từ
        const baseDesc = `S\u{1EA3}n ph\u{1EA9}m ${productName} l\xe0 s\u{1EF1} l\u{1EF1}a ch\u{1ECD}n ho\xe0n h\u{1EA3}o cho nhu c\u{1EA7}u c\xf4ng vi\u{1EC7}c v\xe0 gi\u{1EA3}i tr\xed h\xe0ng ng\xe0y c\u{1EE7}a b\u{1EA1}n. V\u{1EDB}i c\xf4ng ngh\u{1EC7} ti\xean ti\u{1EBF}n nh\u{1EA5}t \u{111}\u{1B0}\u{1EE3}c t\xedch h\u{1EE3}p, ch\xfang t\xf4i cam k\u{1EBF}t mang l\u{1EA1}i hi\u{1EC7}u n\u{103}ng v\u{1B0}\u{1EE3}t tr\u{1ED9}i, \u{111}\u{1ED9} b\u{1EC1}n b\u{1EC9} cao theo th\u{1EDD}i gian v\xe0 tr\u{1EA3}i nghi\u{1EC7}m ng\u{1B0}\u{1EDD}i d\xf9ng t\u{1ED1}i \u{1B0}u nh\u{1EA5}t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u{1EA1}n ho\xe0n to\xe0n c\xf3 th\u{1EC3} y\xean t\xe2m v\u{1EC1} ch\u{1EA5}t l\u{1B0}\u{1EE3}ng s\u{1EA3}n ph\u{1EA9}m \u{111}\xe3 \u{111}\u{1B0}\u{1EE3}c ki\u{1EC3}m \u{111}\u{1ECB}nh nghi\xeam ng\u{1EB7}t tr\u{1B0}\u{1EDB}c khi \u{111}\u{1EBF}n tay kh\xe1ch h\xe0ng.`;
        return {
            id: i + 1,
            name: productName,
            description: baseDesc,
            sold: Math.floor(Math.random() * 10000),
            price: Math.floor(Math.random() * 49900001) + 100000
        };
    });
};
const DB = {
    users: [
        {
            phone: "0123456789",
            pass: "123456"
        },
        {
            phone: "1",
            pass: "1"
        }
    ],
    // gen from generateProducts()
    products: [
        {
            "id": 1,
            "name": "Tay c\u1EA7m ch\u01A1i game Thi\u1EBFt k\u1EBF Ergonomic",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game Thi\u1EBFt k\u1EBF Ergonomic l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 1362,
            "price": 24203166
        },
        {
            "id": 2,
            "name": "Tay c\u1EA7m ch\u01A1i game Si\xeau m\u1ECFng nh\u1EB9",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game Si\xeau m\u1ECFng nh\u1EB9 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 2252,
            "price": 547574
        },
        {
            "id": 3,
            "name": "Router Wi-Fi Th\u1EBF h\u1EC7 12",
            "description": "S\u1EA3n ph\u1EA9m Router Wi-Fi Th\u1EBF h\u1EC7 12 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6458,
            "price": 48180921
        },
        {
            "id": 4,
            "name": "Webcam T\u1ED1c \u0111\u1ED9 cao",
            "description": "S\u1EA3n ph\u1EA9m Webcam T\u1ED1c \u0111\u1ED9 cao l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3186,
            "price": 40086056
        },
        {
            "id": 5,
            "name": "M\xe1y t\xednh b\u1EA3ng Pin kh\u1EE7ng 5000mAh",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y t\xednh b\u1EA3ng Pin kh\u1EE7ng 5000mAh l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7941,
            "price": 22185230
        },
        {
            "id": 6,
            "name": "Tay c\u1EA7m ch\u01A1i game S\u1EA1c nhanh 65W",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game S\u1EA1c nhanh 65W l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 399,
            "price": 13323256
        },
        {
            "id": 7,
            "name": "Smartphone Pin kh\u1EE7ng 5000mAh",
            "description": "S\u1EA3n ph\u1EA9m Smartphone Pin kh\u1EE7ng 5000mAh l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6021,
            "price": 37144978
        },
        {
            "id": 8,
            "name": "Gh\u1EBF Gaming Si\xeau m\u1ECFng nh\u1EB9",
            "description": "S\u1EA3n ph\u1EA9m Gh\u1EBF Gaming Si\xeau m\u1ECFng nh\u1EB9 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9584,
            "price": 46435905
        },
        {
            "id": 9,
            "name": "Camera IP Nh\xf4m nguy\xean kh\u1ED1i",
            "description": "S\u1EA3n ph\u1EA9m Camera IP Nh\xf4m nguy\xean kh\u1ED1i l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 5274,
            "price": 30439817
        },
        {
            "id": 10,
            "name": "Loa Bluetooth Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m Loa Bluetooth Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7457,
            "price": 15139633
        },
        {
            "id": 11,
            "name": "B\xe0n ph\xedm \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K",
            "description": "S\u1EA3n ph\u1EA9m B\xe0n ph\xedm \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6224,
            "price": 43744931
        },
        {
            "id": 12,
            "name": "Tay c\u1EA7m ch\u01A1i game Pin kh\u1EE7ng 5000mAh",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game Pin kh\u1EE7ng 5000mAh l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7494,
            "price": 38357663
        },
        {
            "id": 13,
            "name": "Camera IP Si\xeau m\u1ECFng nh\u1EB9",
            "description": "S\u1EA3n ph\u1EA9m Camera IP Si\xeau m\u1ECFng nh\u1EB9 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4619,
            "price": 22666714
        },
        {
            "id": 14,
            "name": "Loa Bluetooth \xc2m thanh Hi-Res",
            "description": "S\u1EA3n ph\u1EA9m Loa Bluetooth \xc2m thanh Hi-Res l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7400,
            "price": 13748832
        },
        {
            "id": 15,
            "name": "Router Wi-Fi Pin kh\u1EE7ng 5000mAh",
            "description": "S\u1EA3n ph\u1EA9m Router Wi-Fi Pin kh\u1EE7ng 5000mAh l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 5096,
            "price": 48328436
        },
        {
            "id": 16,
            "name": "Ngu\u1ED3n m\xe1y t\xednh H\u1ED7 tr\u1EE3 AI",
            "description": "S\u1EA3n ph\u1EA9m Ngu\u1ED3n m\xe1y t\xednh H\u1ED7 tr\u1EE3 AI l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 1930,
            "price": 2537551
        },
        {
            "id": 17,
            "name": "Tay c\u1EA7m ch\u01A1i game Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3752,
            "price": 3897848
        },
        {
            "id": 18,
            "name": "Gh\u1EBF Gaming Thi\u1EBFt k\u1EBF Ergonomic",
            "description": "S\u1EA3n ph\u1EA9m Gh\u1EBF Gaming Thi\u1EBFt k\u1EBF Ergonomic l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8498,
            "price": 39791935
        },
        {
            "id": 19,
            "name": "Tai nghe \xc2m thanh Hi-Res",
            "description": "S\u1EA3n ph\u1EA9m Tai nghe \xc2m thanh Hi-Res l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 1265,
            "price": 40228034
        },
        {
            "id": 20,
            "name": "Micro thu \xe2m S\u1EA1c nhanh 65W",
            "description": "S\u1EA3n ph\u1EA9m Micro thu \xe2m S\u1EA1c nhanh 65W l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3397,
            "price": 34899102
        },
        {
            "id": 21,
            "name": "M\xe1y in K\u1EBFt n\u1ED1i \u0111a \u0111i\u1EC3m",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y in K\u1EBFt n\u1ED1i \u0111a \u0111i\u1EC3m l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9769,
            "price": 38698735
        },
        {
            "id": 22,
            "name": "Camera IP T\u1ED1c \u0111\u1ED9 cao",
            "description": "S\u1EA3n ph\u1EA9m Camera IP T\u1ED1c \u0111\u1ED9 cao l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3158,
            "price": 23220112
        },
        {
            "id": 23,
            "name": "Tay c\u1EA7m ch\u01A1i game \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7034,
            "price": 44540300
        },
        {
            "id": 24,
            "name": "Chu\u1ED9t Kh\xf4ng d\xe2y",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t Kh\xf4ng d\xe2y l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 2836,
            "price": 3294582
        },
        {
            "id": 25,
            "name": "S\u1EA1c d\u1EF1 ph\xf2ng Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m S\u1EA1c d\u1EF1 ph\xf2ng Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9537,
            "price": 36450620
        },
        {
            "id": 26,
            "name": "B\xe0n ph\xedm Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m B\xe0n ph\xedm Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8202,
            "price": 40640044
        },
        {
            "id": 27,
            "name": "\u1ED4 c\u1EE9ng SSD M\xe0n h\xecnh OLED",
            "description": "S\u1EA3n ph\u1EA9m \u1ED4 c\u1EE9ng SSD M\xe0n h\xecnh OLED l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4346,
            "price": 10175665
        },
        {
            "id": 28,
            "name": "Chu\u1ED9t H\u1ED7 tr\u1EE3 AI",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t H\u1ED7 tr\u1EE3 AI l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6562,
            "price": 7961437
        },
        {
            "id": 29,
            "name": "Ngu\u1ED3n m\xe1y t\xednh Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m Ngu\u1ED3n m\xe1y t\xednh Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9624,
            "price": 10321694
        },
        {
            "id": 30,
            "name": "\u1ED4 c\u1EE9ng SSD S\u1EA1c nhanh 65W",
            "description": "S\u1EA3n ph\u1EA9m \u1ED4 c\u1EE9ng SSD S\u1EA1c nhanh 65W l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7159,
            "price": 44677041
        },
        {
            "id": 31,
            "name": "\u1ED4 c\u1EE9ng SSD Nh\xf4m nguy\xean kh\u1ED1i",
            "description": "S\u1EA3n ph\u1EA9m \u1ED4 c\u1EE9ng SSD Nh\xf4m nguy\xean kh\u1ED1i l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7560,
            "price": 40350614
        },
        {
            "id": 32,
            "name": "Chu\u1ED9t Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 2777,
            "price": 4663720
        },
        {
            "id": 33,
            "name": "Chu\u1ED9t Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3422,
            "price": 45237644
        },
        {
            "id": 34,
            "name": "Micro thu \xe2m Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m Micro thu \xe2m Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4825,
            "price": 776756
        },
        {
            "id": 35,
            "name": "Camera IP Thi\u1EBFt k\u1EBF Ergonomic",
            "description": "S\u1EA3n ph\u1EA9m Camera IP Thi\u1EBFt k\u1EBF Ergonomic l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 974,
            "price": 28239304
        },
        {
            "id": 36,
            "name": "Webcam Si\xeau m\u1ECFng nh\u1EB9",
            "description": "S\u1EA3n ph\u1EA9m Webcam Si\xeau m\u1ECFng nh\u1EB9 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 2840,
            "price": 47004388
        },
        {
            "id": 37,
            "name": "Tay c\u1EA7m ch\u01A1i game \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 2167,
            "price": 37260171
        },
        {
            "id": 38,
            "name": "Tay c\u1EA7m ch\u01A1i game \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 364,
            "price": 46763963
        },
        {
            "id": 39,
            "name": "Chu\u1ED9t Thi\u1EBFt k\u1EBF Ergonomic",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t Thi\u1EBFt k\u1EBF Ergonomic l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6614,
            "price": 8999754
        },
        {
            "id": 40,
            "name": "Camera IP Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m Camera IP Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7356,
            "price": 12838350
        },
        {
            "id": 41,
            "name": "Gh\u1EBF Gaming Nh\xf4m nguy\xean kh\u1ED1i",
            "description": "S\u1EA3n ph\u1EA9m Gh\u1EBF Gaming Nh\xf4m nguy\xean kh\u1ED1i l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8133,
            "price": 872035
        },
        {
            "id": 42,
            "name": "Laptop Kh\xf4ng d\xe2y",
            "description": "S\u1EA3n ph\u1EA9m Laptop Kh\xf4ng d\xe2y l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9258,
            "price": 7832026
        },
        {
            "id": 43,
            "name": "Ngu\u1ED3n m\xe1y t\xednh Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m Ngu\u1ED3n m\xe1y t\xednh Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8968,
            "price": 48227164
        },
        {
            "id": 44,
            "name": "T\u1EA3n nhi\u1EC7t T\u1ED1c \u0111\u1ED9 cao",
            "description": "S\u1EA3n ph\u1EA9m T\u1EA3n nhi\u1EC7t T\u1ED1c \u0111\u1ED9 cao l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 1938,
            "price": 13483394
        },
        {
            "id": 45,
            "name": "M\xe1y t\xednh b\u1EA3ng Si\xeau m\u1ECFng nh\u1EB9",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y t\xednh b\u1EA3ng Si\xeau m\u1ECFng nh\u1EB9 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6297,
            "price": 8381248
        },
        {
            "id": 46,
            "name": "Camera IP \xc2m thanh Hi-Res",
            "description": "S\u1EA3n ph\u1EA9m Camera IP \xc2m thanh Hi-Res l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4835,
            "price": 4327847
        },
        {
            "id": 47,
            "name": "Micro thu \xe2m Phi\xean b\u1EA3n gi\u1EDBi h\u1EA1n",
            "description": "S\u1EA3n ph\u1EA9m Micro thu \xe2m Phi\xean b\u1EA3n gi\u1EDBi h\u1EA1n l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9767,
            "price": 47866747
        },
        {
            "id": 48,
            "name": "Camera IP Pro Max",
            "description": "S\u1EA3n ph\u1EA9m Camera IP Pro Max l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 2895,
            "price": 23848913
        },
        {
            "id": 49,
            "name": "Chu\u1ED9t S\u1EA1c nhanh 65W",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t S\u1EA1c nhanh 65W l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9627,
            "price": 24088421
        },
        {
            "id": 50,
            "name": "Tai nghe T\u1ED1c \u0111\u1ED9 cao",
            "description": "S\u1EA3n ph\u1EA9m Tai nghe T\u1ED1c \u0111\u1ED9 cao l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7554,
            "price": 15527377
        },
        {
            "id": 51,
            "name": "M\xe0n h\xecnh Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m M\xe0n h\xecnh Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3649,
            "price": 16947895
        },
        {
            "id": 52,
            "name": "Laptop S\u1EA1c nhanh 65W",
            "description": "S\u1EA3n ph\u1EA9m Laptop S\u1EA1c nhanh 65W l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 5465,
            "price": 23633880
        },
        {
            "id": 53,
            "name": "Gh\u1EBF Gaming Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m Gh\u1EBF Gaming Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7468,
            "price": 29070528
        },
        {
            "id": 54,
            "name": "M\xe0n h\xecnh Thi\u1EBFt k\u1EBF Ergonomic",
            "description": "S\u1EA3n ph\u1EA9m M\xe0n h\xecnh Thi\u1EBFt k\u1EBF Ergonomic l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7645,
            "price": 3003032
        },
        {
            "id": 55,
            "name": "M\xe1y t\xednh b\u1EA3ng K\u1EBFt n\u1ED1i \u0111a \u0111i\u1EC3m",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y t\xednh b\u1EA3ng K\u1EBFt n\u1ED1i \u0111a \u0111i\u1EC3m l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 1664,
            "price": 9495000
        },
        {
            "id": 56,
            "name": "Router Wi-Fi M\xe0n h\xecnh OLED",
            "description": "S\u1EA3n ph\u1EA9m Router Wi-Fi M\xe0n h\xecnh OLED l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 2618,
            "price": 24971603
        },
        {
            "id": 57,
            "name": "Tay c\u1EA7m ch\u01A1i game Phi\xean b\u1EA3n gi\u1EDBi h\u1EA1n",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game Phi\xean b\u1EA3n gi\u1EDBi h\u1EA1n l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3776,
            "price": 2577299
        },
        {
            "id": 58,
            "name": "Loa Bluetooth Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m Loa Bluetooth Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4650,
            "price": 30940608
        },
        {
            "id": 59,
            "name": "Smartphone H\u1ED7 tr\u1EE3 AI",
            "description": "S\u1EA3n ph\u1EA9m Smartphone H\u1ED7 tr\u1EE3 AI l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6465,
            "price": 10281744
        },
        {
            "id": 60,
            "name": "M\xe1y t\xednh b\u1EA3ng \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y t\xednh b\u1EA3ng \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8061,
            "price": 10221714
        },
        {
            "id": 61,
            "name": "Chu\u1ED9t S\u1EA1c nhanh 65W",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t S\u1EA1c nhanh 65W l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6381,
            "price": 33664427
        },
        {
            "id": 62,
            "name": "\u1ED4 c\u1EE9ng SSD \xc2m thanh Hi-Res",
            "description": "S\u1EA3n ph\u1EA9m \u1ED4 c\u1EE9ng SSD \xc2m thanh Hi-Res l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4836,
            "price": 17258088
        },
        {
            "id": 63,
            "name": "Tai nghe M\xe0n h\xecnh OLED",
            "description": "S\u1EA3n ph\u1EA9m Tai nghe M\xe0n h\xecnh OLED l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4488,
            "price": 30721645
        },
        {
            "id": 64,
            "name": "Loa Bluetooth Th\u1EBF h\u1EC7 12",
            "description": "S\u1EA3n ph\u1EA9m Loa Bluetooth Th\u1EBF h\u1EC7 12 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 2748,
            "price": 43015781
        },
        {
            "id": 65,
            "name": "Chu\u1ED9t Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 5148,
            "price": 48396686
        },
        {
            "id": 66,
            "name": "Ngu\u1ED3n m\xe1y t\xednh Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m Ngu\u1ED3n m\xe1y t\xednh Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 91,
            "price": 47947128
        },
        {
            "id": 67,
            "name": "Smartphone K\u1EBFt n\u1ED1i \u0111a \u0111i\u1EC3m",
            "description": "S\u1EA3n ph\u1EA9m Smartphone K\u1EBFt n\u1ED1i \u0111a \u0111i\u1EC3m l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9774,
            "price": 9292833
        },
        {
            "id": 68,
            "name": "Router Wi-Fi Si\xeau m\u1ECFng nh\u1EB9",
            "description": "S\u1EA3n ph\u1EA9m Router Wi-Fi Si\xeau m\u1ECFng nh\u1EB9 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 210,
            "price": 49852344
        },
        {
            "id": 69,
            "name": "\u0110\u1ED3ng h\u1ED3 th\xf4ng minh Nh\xf4m nguy\xean kh\u1ED1i",
            "description": "S\u1EA3n ph\u1EA9m \u0110\u1ED3ng h\u1ED3 th\xf4ng minh Nh\xf4m nguy\xean kh\u1ED1i l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7299,
            "price": 44287649
        },
        {
            "id": 70,
            "name": "M\xe1y in Nh\xf4m nguy\xean kh\u1ED1i",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y in Nh\xf4m nguy\xean kh\u1ED1i l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4206,
            "price": 31504157
        },
        {
            "id": 71,
            "name": "B\xe0n ph\xedm B\u1EA3o h\xe0nh 2 n\u0103m",
            "description": "S\u1EA3n ph\u1EA9m B\xe0n ph\xedm B\u1EA3o h\xe0nh 2 n\u0103m l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3085,
            "price": 12706658
        },
        {
            "id": 72,
            "name": "S\u1EA1c d\u1EF1 ph\xf2ng S\u1EA1c nhanh 65W",
            "description": "S\u1EA3n ph\u1EA9m S\u1EA1c d\u1EF1 ph\xf2ng S\u1EA1c nhanh 65W l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 2347,
            "price": 2107935
        },
        {
            "id": 73,
            "name": "Ngu\u1ED3n m\xe1y t\xednh Th\u1EBF h\u1EC7 12",
            "description": "S\u1EA3n ph\u1EA9m Ngu\u1ED3n m\xe1y t\xednh Th\u1EBF h\u1EC7 12 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3091,
            "price": 20471544
        },
        {
            "id": 74,
            "name": "Gh\u1EBF Gaming Kh\xf4ng d\xe2y",
            "description": "S\u1EA3n ph\u1EA9m Gh\u1EBF Gaming Kh\xf4ng d\xe2y l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3167,
            "price": 40684568
        },
        {
            "id": 75,
            "name": "Chu\u1ED9t Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 7652,
            "price": 39620624
        },
        {
            "id": 76,
            "name": "Ngu\u1ED3n m\xe1y t\xednh \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K",
            "description": "S\u1EA3n ph\u1EA9m Ngu\u1ED3n m\xe1y t\xednh \u0110\u1ED9 ph\xe2n gi\u1EA3i 4K l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8265,
            "price": 18898071
        },
        {
            "id": 77,
            "name": "Router Wi-Fi Si\xeau m\u1ECFng nh\u1EB9",
            "description": "S\u1EA3n ph\u1EA9m Router Wi-Fi Si\xeau m\u1ECFng nh\u1EB9 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3417,
            "price": 4201301
        },
        {
            "id": 78,
            "name": "M\xe0n h\xecnh K\u1EBFt n\u1ED1i \u0111a \u0111i\u1EC3m",
            "description": "S\u1EA3n ph\u1EA9m M\xe0n h\xecnh K\u1EBFt n\u1ED1i \u0111a \u0111i\u1EC3m l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3172,
            "price": 1294082
        },
        {
            "id": 79,
            "name": "Gh\u1EBF Gaming Thi\u1EBFt k\u1EBF Ergonomic",
            "description": "S\u1EA3n ph\u1EA9m Gh\u1EBF Gaming Thi\u1EBFt k\u1EBF Ergonomic l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3939,
            "price": 33391143
        },
        {
            "id": 80,
            "name": "\u0110\u1ED3ng h\u1ED3 th\xf4ng minh Pin kh\u1EE7ng 5000mAh",
            "description": "S\u1EA3n ph\u1EA9m \u0110\u1ED3ng h\u1ED3 th\xf4ng minh Pin kh\u1EE7ng 5000mAh l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4818,
            "price": 2847507
        },
        {
            "id": 81,
            "name": "S\u1EA1c d\u1EF1 ph\xf2ng S\u1EA1c nhanh 65W",
            "description": "S\u1EA3n ph\u1EA9m S\u1EA1c d\u1EF1 ph\xf2ng S\u1EA1c nhanh 65W l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8260,
            "price": 34242528
        },
        {
            "id": 82,
            "name": "Chu\u1ED9t Thi\u1EBFt k\u1EBF Ergonomic",
            "description": "S\u1EA3n ph\u1EA9m Chu\u1ED9t Thi\u1EBFt k\u1EBF Ergonomic l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 858,
            "price": 45909518
        },
        {
            "id": 83,
            "name": "Tai nghe Nh\xf4m nguy\xean kh\u1ED1i",
            "description": "S\u1EA3n ph\u1EA9m Tai nghe Nh\xf4m nguy\xean kh\u1ED1i l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8823,
            "price": 12319045
        },
        {
            "id": 84,
            "name": "M\xe1y t\xednh b\u1EA3ng Pin kh\u1EE7ng 5000mAh",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y t\xednh b\u1EA3ng Pin kh\u1EE7ng 5000mAh l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8074,
            "price": 37026622
        },
        {
            "id": 85,
            "name": "Webcam Pin kh\u1EE7ng 5000mAh",
            "description": "S\u1EA3n ph\u1EA9m Webcam Pin kh\u1EE7ng 5000mAh l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 5296,
            "price": 21603977
        },
        {
            "id": 86,
            "name": "Loa Bluetooth Si\xeau m\u1ECFng nh\u1EB9",
            "description": "S\u1EA3n ph\u1EA9m Loa Bluetooth Si\xeau m\u1ECFng nh\u1EB9 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 4627,
            "price": 19274770
        },
        {
            "id": 87,
            "name": "M\xe1y in Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y in Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8255,
            "price": 7634370
        },
        {
            "id": 88,
            "name": "M\xe1y in B\u1EA3o h\xe0nh 2 n\u0103m",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y in B\u1EA3o h\xe0nh 2 n\u0103m l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 3706,
            "price": 13307933
        },
        {
            "id": 89,
            "name": "\u0110\u1ED3ng h\u1ED3 th\xf4ng minh Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m \u0110\u1ED3ng h\u1ED3 th\xf4ng minh Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 5724,
            "price": 10384866
        },
        {
            "id": 90,
            "name": "T\u1EA3n nhi\u1EC7t Ch\u1ED1ng n\u01B0\u1EDBc IP68",
            "description": "S\u1EA3n ph\u1EA9m T\u1EA3n nhi\u1EC7t Ch\u1ED1ng n\u01B0\u1EDBc IP68 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6920,
            "price": 24499897
        },
        {
            "id": 91,
            "name": "\u0110\u1ED3ng h\u1ED3 th\xf4ng minh Si\xeau m\u1ECFng nh\u1EB9",
            "description": "S\u1EA3n ph\u1EA9m \u0110\u1ED3ng h\u1ED3 th\xf4ng minh Si\xeau m\u1ECFng nh\u1EB9 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8801,
            "price": 39941995
        },
        {
            "id": 92,
            "name": "Laptop C\u01A1 h\u1ECDc RGB",
            "description": "S\u1EA3n ph\u1EA9m Laptop C\u01A1 h\u1ECDc RGB l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 5754,
            "price": 20855507
        },
        {
            "id": 93,
            "name": "T\u1EA3n nhi\u1EC7t Ultra Gaming",
            "description": "S\u1EA3n ph\u1EA9m T\u1EA3n nhi\u1EC7t Ultra Gaming l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6040,
            "price": 47065818
        },
        {
            "id": 94,
            "name": "M\xe1y t\xednh b\u1EA3ng Kh\xf4ng d\xe2y",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y t\xednh b\u1EA3ng Kh\xf4ng d\xe2y l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9120,
            "price": 44241151
        },
        {
            "id": 95,
            "name": "M\xe0n h\xecnh M\xe0n h\xecnh OLED",
            "description": "S\u1EA3n ph\u1EA9m M\xe0n h\xecnh M\xe0n h\xecnh OLED l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 5791,
            "price": 7432793
        },
        {
            "id": 96,
            "name": "M\xe1y t\xednh b\u1EA3ng Phi\xean b\u1EA3n gi\u1EDBi h\u1EA1n",
            "description": "S\u1EA3n ph\u1EA9m M\xe1y t\xednh b\u1EA3ng Phi\xean b\u1EA3n gi\u1EDBi h\u1EA1n l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6672,
            "price": 19596323
        },
        {
            "id": 97,
            "name": "Tay c\u1EA7m ch\u01A1i game H\u1ED7 tr\u1EE3 AI",
            "description": "S\u1EA3n ph\u1EA9m Tay c\u1EA7m ch\u01A1i game H\u1ED7 tr\u1EE3 AI l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 991,
            "price": 37000705
        },
        {
            "id": 98,
            "name": "Ngu\u1ED3n m\xe1y t\xednh Th\u1EBF h\u1EC7 12",
            "description": "S\u1EA3n ph\u1EA9m Ngu\u1ED3n m\xe1y t\xednh Th\u1EBF h\u1EC7 12 l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 6342,
            "price": 49021004
        },
        {
            "id": 99,
            "name": "Smartphone Pin kh\u1EE7ng 5000mAh",
            "description": "S\u1EA3n ph\u1EA9m Smartphone Pin kh\u1EE7ng 5000mAh l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 9895,
            "price": 20075597
        },
        {
            "id": 100,
            "name": "T\u1EA3n nhi\u1EC7t Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng",
            "description": "S\u1EA3n ph\u1EA9m T\u1EA3n nhi\u1EC7t Ch\u1ED1ng \u1ED3n ch\u1EE7 \u0111\u1ED9ng l\xe0 s\u1EF1 l\u1EF1a ch\u1ECDn ho\xe0n h\u1EA3o cho nhu c\u1EA7u c\xf4ng vi\u1EC7c v\xe0 gi\u1EA3i tr\xed h\xe0ng ng\xe0y c\u1EE7a b\u1EA1n. V\u1EDBi c\xf4ng ngh\u1EC7 ti\xean ti\u1EBFn nh\u1EA5t \u0111\u01B0\u1EE3c t\xedch h\u1EE3p, ch\xfang t\xf4i cam k\u1EBFt mang l\u1EA1i hi\u1EC7u n\u0103ng v\u01B0\u1EE3t tr\u1ED9i, \u0111\u1ED9 b\u1EC1n b\u1EC9 cao theo th\u1EDDi gian v\xe0 tr\u1EA3i nghi\u1EC7m ng\u01B0\u1EDDi d\xf9ng t\u1ED1i \u01B0u nh\u1EA5t trong ph\xe2n kh\xfac gi\xe1 n\xe0y. B\u1EA1n ho\xe0n to\xe0n c\xf3 th\u1EC3 y\xean t\xe2m v\u1EC1 ch\u1EA5t l\u01B0\u1EE3ng s\u1EA3n ph\u1EA9m \u0111\xe3 \u0111\u01B0\u1EE3c ki\u1EC3m \u0111\u1ECBnh nghi\xeam ng\u1EB7t tr\u01B0\u1EDBc khi \u0111\u1EBFn tay kh\xe1ch h\xe0ng.",
            "sold": 8098,
            "price": 39155853
        }
    ]
};

//# sourceMappingURL=app-code.1bbd2034.js.map
