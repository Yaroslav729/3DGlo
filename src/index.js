import timer from "./modules/timer";
import menu from "./modules/menu";
import modal from "./modules/modal";
import calculator from "./modules/calculator";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import calc from "./modules/calc";
import sandForm from "./modules/sandForm";
import sendForm from "./modules/sandForm";

timer('15 march 2022 22:16')
menu()
modal()
calculator()
tabs()
slider()
calc(100)
sendForm({formId: "form1", someElem: [
        {
            type: 'block',
            id: 'total'
        }
    ]})