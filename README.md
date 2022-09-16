<p dir="rtl">
<h3><a href="https://github.com/kuwaitcodes/KC-web-cw-7">تمرين </a></h3></p>


<p dir="rtl">
اليوم راح نحسب مؤشر وزن الجسم أو الـ BMI 📏!</p>
<h1></h1>
<p dir="rtl">
 <strong>جاااهزييين؟ 😍</strong></p>




1. قم بعمل fork للـ repository
2. افتح الـ repository باستخدام github desktop
3. افتح ملف script.js لتبدأ بالحل
4. عرف دالة باسم BMI وتستقبل معاملين (weight, height)
    - استخدم المعادلة التالية لحساب الـ BMI، ثم قم بحفظ الناتج في متغير باسم result:
    <br><code>weight / (height * height)</code>
    - أرجِع result باستخدام كلمة return
5. قم بمناداة الدالة BMI داخل console.log ولا تنسَ كتابة المعاملات
<br><code>مساعدة: ((أدخل المعاملات هنا)BMI)console.log</code>
6. عرف دالة مرجعة باسم Status والتي ستستقبل المعامل BodyMass , وترجع لنا قيمة طبقاً للمقياس التالي (return):
<br><code>مساعدة: ستستخدم الجملة الشرطية if</code>
<div dir="rtl">
  <table>
    <tr><td>return</td><td> BodyMass </td></tr>
    <tr><td>"لديك نقص في الوزن"</td><td>أقل من 18.5</td></tr>
    <tr><td>"وزنك صحي"</td><td>أكبر من أو يساوي 18.5 وأصغر من 25</td></tr>
    <tr><td>"لديك زيادة في الوزن"</td><td>أكبر من أو يساوي 25</td></tr>
  </table>
</div>
<p dir="rtl">
    
7. عرف دالة باسم calculate لتقوم بتنفيذ الخطوات التالية عند مناداتها:
    - احفظ قيمة الوزن التي يدخلها المستخدم في حقل الإدخال في متغير باسم weight
    <br />`مساعدة: let weight = document.getElementById(...).value`
    - احفظ قيمة الطول التي يدخلها المستخدم في حقل الإدخال في متغير باسم height
   <br />`مساعدة: let height = document.getElementById(...).value`
    - عرّف متغير باسم bmi_value قيمته هي الدالة ()BMI، ولا تنسَ استخدام الـweight والـheight في معاملات الدالة
    <br> <code>مساعدة:()let bmi_value = BMI</code>
    - عرّف متغير باسم desc قيمته هي الدالة ()Status، ولا تنسَ استخدام المتغير bmi_value الذي أنشأته في الخطوة السابقة كمعامل للدالة Status
        <br> <code>مساعدة: (bmi_value)let desc = Status</code>
    - عرّف متغير باسم box واجعل قيمته هي الوسم الذي يحمل هوية result طبقاً للمساعدة أدناه
    <br />`مساعدة: let box = document.getElementById('result')`
    - غير النص الداخلي للمتغير box باستخدام innerText واجعل قيمته كالآتي:
    <br/>`bmi_value + " == " + desc`
    <br/>`مساعدة: box.innerText = bmi_value + " == " + desc`
8. أضف حدث onclick إلى الزر ليستدعِ دالة calculate
9. احفظ التغييرات وارفع الكود إلى github
10. قم بتسليم التمرين في موقع Coded lab

</p>

 <p dir="rtl">
<strong>بونص! ✨</strong></p>

- قم بكتابة معاملات افتراضية للدالة ()BMI، وكرر الخطوة 5 بدون معاملات!
- قم باستخدام حدث onmouseover بدلاً من onclick في الخطوة 7
- قم بالتعبير عن كل حالة من الحالات الموجودة في الجدول بتغيير لون النص، مثلاً: 
    - لديك نقص في الوزن  <- باللون البرتقالي
    - وزنك صحي <- باللون الأخضر
    - لديك زيادة في الوزن <- باللون الأحمر
 <p dir="rtl">
 "لا تترددون بسؤال المدرسين 👌"
</p>




