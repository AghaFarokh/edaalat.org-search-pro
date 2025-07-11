# جستجوی دقیق پرونده‌های عدالت (نسخه آزمایشی)

ابزاری برای جستجوی سریع و دقیق پرونده‌های سایت عدالت (edaalat.org) با رابط کاربری زیبا و پشتیبانی از پراکسی و جستجوی چندعبارتی

---

## معرفی

از اونجایی که سرچ خود سایت خیلی درهم سرچ میکند این پروژه که به شما اجازه می‌دهد در میان میلیون‌ها پرونده سایت عدالت (edaalat.org) به صورت دقیق و سریع جستجو کنید.

---

## راه‌اندازی سریع

۱. ابتدا پروژه را دانلود یا کلون کنید:
```bash
git clone https://github.com/aghafarokh/edaalat-search-pro.git
cd edaalat-search-pro
```

۲. فقط با دو دستور زیر همه چیز آماده می‌شود:
```bash
npm install
node proxy.js
```
(اگر نیاز به پراکسی دارید چون سایتش فیلتره میتونید پراکسی پس کنید بهش برای اجرا: 
برای نمونه پراکسی کلاینت V2ray :  
`node proxy.js 127.0.0.1:10808`  
را اجرا کنید.)

۳. فایل `search.html` را با مرورگر باز کنید و جستجو را آغاز کنید.

---

## امکانات فعلی

- جستجوی دقیق و سریع چندعبارتی (هر خط یک نام/عبارت)
- نمایش نتایج به صورت زنده و گروه‌بندی‌شده
- پشتیبانی از پراکسی SOCKS (برای عبور از فیلترینگ)
- انتخاب تعداد درخواست همزمان (برای افزایش سرعت جستجو)

---

## ساختار پروژه

```
edaalat-search-pro/
├── proxy.js         # سرور پروکسی Node.js برای ارسال درخواست به edaalat.org
├── search.html      # رابط کاربری تحت وب برای جستجو
├── package.json     # وابستگی‌ها
└── README.md        # این فایل
```

---

## نکات و توصیه‌ها

- اگر سایت عدالت در شبکه شما فیلتر است، حتماً از پراکسی استفاده کنید.
- برای جستجوی چندعبارتی، هر عبارت را در یک خط جداگانه وارد کنید.
- نتایج هر عبارت به صورت جداگانه و زنده نمایش داده می‌شود.
- اگر تعداد صفحات زیاد است، بازه صفحه را محدود کنید تا سرور بلاک نشود.
- برای افزایش سرعت، هنگام جستجو تعداد درخواست همزمان (threads) را وارد کنید (مثلاً 5 یا 10).
- برای استفاده از پراکسی، کافیست آدرس و پورت پراکسی را به صورت آرگومان به دستور اضافه کنید:
  ```bash
  node proxy.js 127.0.0.1:10808
  ```

---

## وضعیت پروژه

> این پروژه نسخه آزمایشی است و ممکن است در آینده قابلیت‌های بیشتری به آن اضافه شود.  
> اگر پیشنهادی دارید یا مشکلی پیدا کردید، Issue یا Pull Request ثبت کنید.

---

## لایسنس

MIT
