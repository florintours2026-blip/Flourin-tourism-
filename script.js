// محاكاة تسجيل الدخول
function login(role) {
    if (role === 'admin') {
        document.getElementById('admin-panel').style.display = 'block';
        alert('مرحباً بك يا مسؤول فلورني السياحية! يمكنك الآن إضافة عروض وبكجات.');
    } else {
        alert('تم تسجيل دخولك كعميل بنجاح!');
    }
    document.getElementById('login-section').style.display = 'none';
}

// مصفوفة لتخزين البكجات السياحية
let packages = [
    { title: "بكج دبي العائلي", price: "500$", desc: "شامل الفندق والطيران لـ 5 أيام", type: "adult" },
    { title: "رحلة ديزني لاند للأطفال", price: "300$", desc: "بكج مخصص للأطفال واليافعين شامل تذاكر الألعاب", type: "child" }
];

// دالة لعرض البكجات
function displayPackages(list) {
    const container = document.getElementById('packages-container');
    if(!container) return;
    container.innerHTML = '';
    list.forEach(pkg => {
        container.innerHTML += `
            <div class="card" style="border-left: 5px solid var(--primary-color);">
                <h3>${pkg.title}</h3>
                <p><strong>السعر:</strong> ${pkg.price}</p>
                <p>${pkg.desc}</p>
                <button onclick="location.href='booking.html'">احجز الآن</button>
            </div>
        `;
    });
}

// إضافة بكج جديد بواسطة الأدمن
function addPackage() {
    const title = document.getElementById('pkg-title').value;
    const price = document.getElementById('pkg-price').value;
    const desc = document.getElementById('pkg-desc').value;
      
    if(title && price) {
        packages.push({ title, price, desc, type: "adult" });
        displayPackages(packages);
        alert('تمت إضافة البكج السياحي بنجاح!');
    }
}

// فلترة البكجات حسب نظام الطيران لأعمار المسافرين
function filterPackages() {
    const filterValue = document.getElementById('age-filter').value;
    if (filterValue === 'all') {
        displayPackages(packages);
    } else {
        const filtered = packages.filter(p => p.type === filterValue);
        displayPackages(filtered);
    }
}

// محاكاة قراءة جواز السفر بالذكاء الاصطناعي OCR
function simulateAIOCR() {
    alert("جاري فحص وقراءة جواز السفر بواسطة الذكاء الاصطناعي لشركة فلورني...");
    setTimeout(() => {
        document.getElementById('pass-name').value = "محمد أحمد السوداني";
        document.getElementById('pass-number').value = "P01234567";
        document.getElementById('pass-nationality').value = "سوداني";
        alert("تم استخراج البيانات بنجاح وبدون أي أخطاء!");
    }, 2000);
}

// شات بوت الذكاء الاصطناعي المبسط
function toggleChat() {
    const chat = document.getElementById('chat-box');
    chat.style.display = chat.style.display === 'none' ? 'block' : 'none';
}

function sendMessage() {
    const input = document.getElementById('chat-input');
    const content = document.getElementById('chat-content');
    if(!input.value) return;

    content.innerHTML += `<p><b>أنت:</b> ${input.value}</p>`;
      
    // رد تلقائي ذكي من نظام المساعد السياحي لفلورني
    setTimeout(() => {
        content.innerHTML += `<p><b>المساعد الذكي:</b> أهلاً بك في فلورني للسياحة! يسعدني جداً مساعدتك في حجز أفضل البكجات السياحية والفنادق. يمكنك التواصل معنا مباشرة عبر واتساب على الرقم 201065859268+ لتأكيد الحجز الفوري!</p>`;
        content.scrollTop = content.scrollHeight;
    }, 1000);

    input.value = '';
}

// تشغيل العرض الأولي عند تحميل الصفحة
window.onload = () => {
    displayPackages(packages);
};
