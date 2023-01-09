let p = document.getElementById("remark");

const remarks = [
    "Что разум человека может постигнуть и во что он может поверить, того он способен достичь. Наполеон Хилл",
    "Стремитесь не к успеху, а к ценностям, которые он дает. Альберт Эйнштейн", "Надо любить жизнь больше, чем смысл жизни. Федор Достоевский",
    "Жизнь - это то, что с тобой происходит, пока ты строишь планы. Джон Леннон",
    "Логика может привести Вас от пункта А к пункту Б, а воображение — куда угодно. Альберт Эйнштейн", "Либо вы управляете вашим днем, либо день управляет вами. Джим Рон",
    "Каждый хочет изменить человечество, но никто не задумывается о том, как изменить себя. Лев Толстой"
];

//let index = Math.round(Math.random() * (remarks.length - 1));

(async () => {
    let res = await fetch("https://api.goprogram.ai/inspiration");
    if (res.ok) {
        let json = await res.json();
        p.innerHTML = `${json["quote"]} ${json["author"]}`;
    } else {
        //alert("Ошибка HTTP: " + response.status);
        let index = Math.round(Math.random() * (remarks.length - 1));
        p.innerHTML = remarks[index];
    }
})();

