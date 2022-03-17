import * as events from "events";

const inputs_name = ["user_name", "user_phone", "user_message"];
const patterns_for_name = [
    "^[А-Яа-яЁё\\s]+$",
    "^[\\d\\+\\-\\(\\)]+$",
    "^[А-Яа-яЁё\\s.,!?\\+\\-]+$",
];
const anchors = document.querySelectorAll('a[href*="#"]');
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const blockID = anchor.getAttribute("href").substr(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
}
const sendForm = ({formId, someElem = []}) => {
    const formKalc = document.querySelectorAll('.calc-block > input');
    const total = document.getElementById('total')
    const select = document.querySelector('.calc-type')
    function formSelekt() {
        formKalc.forEach(input => {
            input.value = "";
        });
        total.textContent = 0;
        select.options[0].selected = true
    }



    const form = document.getElementById(formId);
    let errors = [];
    const statusBlock = document.createElement("div");
    statusBlock.style.color = "white";
    inputs_name.forEach((name, i) => {
        let input = form.querySelector(`[name="${name}"]`);
        if (input) {
            input.setAttribute("pattern", patterns_for_name[i]);
        }
    });

    const loadText = "Загрузка...";
    const errorText = "Ошибка...";
    const successText = "Спасибо! Наш менеджер с вами свяжется";

    const validate = list => {
        let success = true;
        list.forEach(input => {
            if (!input.value) {
                errors.push(input.name.replace(/user_/g, ""));
                success = false;
            }
        });
        return success;
    };

    const sendData = data => {
        return fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(res => res.json());
    };

    const submitForm = () => {
        const formElements = form.querySelectorAll("input");
        let formBody = {};

        formElements.forEach(key => {
            let name = key.name;
            let value = key.value;
            formBody = {...formBody, [name]: value};
        });
        form.after(statusBlock);

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            if (elem.type === "block") {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === "input") {
                formBody[elem.id] = element.value;
            }
        });

        if (validate(formElements)) {
            statusBlock.textContent = loadText;
            sendData(formBody)
                .then(() => {
                    statusBlock.textContent = successText;

                    formElements.forEach(input => {
                        input.value = "";
                    });
                    formSelekt()
                })
                .catch(() => {
                    statusBlock.textContent = errorText;
                });
        } else {
            alert("Данные не валидны!!!\n" + errors.join(", "));
        }

        setTimeout(() => {
            statusBlock.remove();
        }, 3000);
    };
    form.addEventListener("submit", event => {
        event.preventDefault();

        submitForm();
    });
};
export default sendForm;
